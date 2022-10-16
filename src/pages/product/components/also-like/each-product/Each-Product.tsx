import {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

import {getPercentage, returnSavedItem} from "../../../../../assets/functions";
import {useAppDispatch, useAppSelector} from "../../../../../assets/hooks";
import {rapid_api_key} from "../../../../../assets/keys";
import {LikeButton} from "../../../../../components";
import {productType} from "../../../types";
import {
  saveProduct,
  unsaveProduct,
} from "../../../../../state/actions-creator/product";

interface componentProps {
  item: productType;
  cat_id: string;
}

const AlsoLikeEachProduct = ({item, cat_id}: componentProps) => {
  const [savingProduct, setSavingProduct] = useState(false);
  const dispatch = useAppDispatch();

  const saved_products = useAppSelector(state => state.product.saved);
  const gender = useAppSelector(state => state.app.gender);

  const prevPrice = item.price && item.price.previous.value !== null;

  const link_product_name =
    item.name &&
    item.name
      .replace(" - ", " ")
      .replace(new RegExp(" ", "g"), "-")
      .toLocaleLowerCase();

  const link_path = `/${gender}/product/${link_product_name}/${item.id}/${cat_id}`;

  const toggleSaveProduct = () => {
    const isSaved = saved_products.some(product => item.id === product.id);
    //const saved_item = returnSavedItem(product, "");

    if (isSaved) {
      dispatch(unsaveProduct(item.id || 0));
    } else {
      setSavingProduct(true);
      //SOME INFORMATION ARE MISSING ON THE PRODUCTS LIST, SO FETCH PRODUCT FULL DATA WHEN SAVED
      const options = {
        method: "GET",
        url: "https://asos2.p.rapidapi.com/products/v3/detail",
        params: {id: item.id, lang: "en-US", store: "US", currency: "USD"},
        headers: {
          "X-RapidAPI-Key": rapid_api_key,
          "X-RapidAPI-Host": "asos2.p.rapidapi.com",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          const saved_item = returnSavedItem(response.data, "", cat_id);
          setSavingProduct(false);

          dispatch(saveProduct(saved_item));
        })
        .catch(function (error) {
          setSavingProduct(false);
          console.error(error);
        });
    }
  };

  return (
    <div className="each-also-like-product">
      <Link to={link_path} className="each-also-like-product-link">
        <div className="product-image-container">
          <img src={`https://${item?.imageUrl}`} alt="" />
        </div>

        <div
          className={`product-price-container ${prevPrice && "has-prev-price"}`}
        >
          <span className="current-price">
            {item.price && item?.price.current.text}{" "}
            <span>
              (
              {getPercentage(
                item.price?.previous.value || 0,
                item.price?.current.value || 0
              )}
              % )
            </span>
          </span>
          <span className="prev-price">
            {item.price && item.price.previous.text}
          </span>
        </div>
        <div className="product-brand-container">
          <span>{item?.brandName}</span>
        </div>
      </Link>

      <div className="add-to-favorite-button-container">
        <LikeButton
          buttonAction={toggleSaveProduct}
          isLiked={saved_products.some(product => product.id === item.id)}
          isLoading={savingProduct}
        />
      </div>
    </div>
  );
};

export default AlsoLikeEachProduct;
