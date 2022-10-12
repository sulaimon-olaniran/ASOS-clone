import {useState, useEffect, useCallback} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

import {LikeButton} from "../../../../components";
import {productType} from "../../types";

import {useAppDispatch, useAppSelector} from "../../../../assets/hooks";
import {
  saveProduct,
  unsaveProduct,
} from "../../../../state/actions-creator/product";
import {rapid_api_key} from "../../../../assets/keys";
import {getPercentage, returnSavedItem} from "../../../../assets/functions";

interface componentProps {
  cat_id: string;
}

const ProductAlsoLike = ({cat_id}: componentProps) => {
  const [products, setProducts] = useState<productType[]>([]);

  //console.log(cat_id);

  const saved_products = useAppSelector(state => state.product.saved);
  const gender = useAppSelector(state => state.app.gender);

  const dispatch = useAppDispatch();

  const handleGetAlsoLikeProducts = useCallback(() => {
    const options = {
      method: "GET",
      url: "https://asos2.p.rapidapi.com/products/v2/list",
      params: {
        store: "US",
        offset: "0",
        categoryId: cat_id,
        limit: "18",
        country: "US",
        currency: "USD",
        sizeSchema: "US",
        lang: "en-US",
      },
      headers: {
        "X-RapidAPI-Key": rapid_api_key,
        "X-RapidAPI-Host": "asos2.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        //console.log(response.data);
        setProducts(response.data.products);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [cat_id]);

  useEffect(() => {
    handleGetAlsoLikeProducts();
  }, [handleGetAlsoLikeProducts]);

  return (
    <div className="product-also-like-container">
      <h1>You Might Also Like</h1>

      <div className="also-like-products-list-container">
        {products.map((item, index) => {
          const prevPrice = item.price && item.price.previous.value !== null;
          const isSaved = saved_products.some(prod => prod.id === item.id);

          const saved_item = returnSavedItem(item, "");

          const toggleSaveProduct = () => {
            if (isSaved) {
              dispatch(unsaveProduct(item.id || 0));
            } else {
              dispatch(saveProduct(saved_item));
            }
          };

          const link_product_name =
            item.name &&
            item.name
              .replace(" - ", " ")
              .replace(new RegExp(" ", "g"), "-")
              .toLocaleLowerCase();

          const link_path = `/${gender}/product/${link_product_name}/${item.id}/${cat_id}`;

          return (
            <div className="each-also-like-product">
              <Link
                to={link_path}
                key={index}
                className="each-also-like-product-link"
              >
                <div className="product-image-container">
                  <img src={`https://${item?.imageUrl}`} alt="" />
                </div>

                <div
                  className={`product-price-container ${
                    prevPrice && "has-prev-price"
                  }`}
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
                  isLiked={saved_products.some(
                    product => product.id === item.id
                  )}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductAlsoLike;
