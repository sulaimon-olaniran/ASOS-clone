import {Link} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

import LikeButtonComponent from "../../like-button/Like-Button";
//import {productType} from "../interface";
import {productType} from "../../../pages/product/types";
import {rapid_api_key} from "../../../assets/keys";

import {
  saveProduct,
  unsaveProduct,
} from "../../../state/actions-creator/product";
import {useAppDispatch, useAppSelector} from "../../../assets/hooks";
import {returnSavedItem} from "../../../assets/functions";

type componentType = {
  product: productType;
  category_id: string;
};

const EachProdcut = ({product, category_id}: componentType) => {
  const [savingProduct, setSavingProduct] = useState(false);
  const hasPreviousPrice: boolean =
    product.price && product.price.previous.value !== null ? true : false;

  const dispatch = useAppDispatch();

  const saved_products = useAppSelector(state => state.product.saved);
  const gender = useAppSelector(state => state.app.gender);

  const toggleSaveProduct = () => {
    const isSaved = saved_products.some(item => item.id === product.id);
    //const saved_item = returnSavedItem(product, "");

    if (isSaved) {
      dispatch(unsaveProduct(product.id || 0));
    } else {
      setSavingProduct(true);

      const options = {
        method: "GET",
        url: "https://asos2.p.rapidapi.com/products/v3/detail",
        params: {id: product.id, lang: "en-US", store: "US", currency: "USD"},
        headers: {
          "X-RapidAPI-Key": rapid_api_key,
          "X-RapidAPI-Host": "asos2.p.rapidapi.com",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          //console.log(response.data);
          const saved_item = returnSavedItem(response.data, "");
          setSavingProduct(false);

          dispatch(saveProduct(saved_item));
        })
        .catch(function (error) {
          setSavingProduct(false);
          console.error(error);
        });
    }
  };

  // path="/men/product/:name/:product_id/:category_id"

  const link_product_name =
    product.name &&
    product.name
      .replace(" - ", " ")
      .replace(new RegExp(" ", "g"), "-")
      .toLocaleLowerCase();

  const link_path = `/${gender}/product/${link_product_name}/${product.id}/${category_id}`;

  return (
    <div className="each-product-container">
      <Link to={link_path} className="each-product-link-container">
        <div className="product-image-container">
          <img src={`https://${product.imageUrl}`} alt="product" />
        </div>
        <div className="product-name-container">
          <span>{product?.name}</span>
        </div>
        <div
          className={`product-price-container ${
            hasPreviousPrice && "has-previous-price"
          }`}
        >
          <span className="previous-price">
            {product.price && product.price.previous.text}
          </span>
          <span>{product.price && product.price.current.text}</span>
        </div>

        <div className="each-product-discount-percentage">-13%</div>
      </Link>
      <div className="each-product-like-button">
        <LikeButtonComponent
          buttonAction={toggleSaveProduct}
          isLiked={saved_products.some(item => item.id === product.id)}
          isLoading={savingProduct}
        />
      </div>
    </div>
  );
};

export default EachProdcut;
