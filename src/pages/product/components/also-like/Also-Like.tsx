import {useState, useEffect, useCallback} from "react";
import axios from "axios";

import {LikeButton} from "../../../../components";
import {productType} from "../../types";

import {useAppDispatch, useAppSelector} from "../../../../assets/hooks";
import {
  saveProduct,
  unsaveProduct,
} from "../../../../state/actions-creator/product";
import {rapid_api_key} from "../../../../assets/keys";

interface componentProps {
  cat_id: string;
}

const ProductAlsoLike = ({cat_id}: componentProps) => {
  const [products, setProducts] = useState<productType[]>([]);

  const saved_products = useAppSelector(state => state.product.saved);
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
  }, []);

  useEffect(() => {
    handleGetAlsoLikeProducts();
  }, [handleGetAlsoLikeProducts]);

  return (
    <div className="product-also-like-container">
      <h1>You Might Also Like</h1>

      <div className="also-like-products-list-container">
        {products.map((item, index) => {
          const prevPrice = item.price && item.price.previous.value !== null;
          //console.log(item.id);
          const toggleSaveProduct = () => {
            if (saved_products.includes(item.id || 0)) {
              dispatch(unsaveProduct(item.id || 0));
            } else {
              dispatch(saveProduct(item.id || 0));
            }
          };
          return (
            <div key={index} className="each-also-like-product">
              <div className="product-image-container">
                <img src={`https://${item?.imageUrl}`} alt="" />
                <div className="add-to-favorite-button-container">
                  <LikeButton
                    buttonAction={toggleSaveProduct}
                    isLiked={saved_products.includes(item.id || 0)}
                  />
                </div>
              </div>

              <div
                className={`product-price-container ${
                  prevPrice && "has-prev-price"
                }`}
              >
                <span className="current-price">
                  {item.price && item?.price.current.text} <span>(-33%)</span>
                </span>
                <span className="prev-price">£30.00</span>
              </div>
              <div className="product-brand-container">
                <span>{item?.brandName}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductAlsoLike;
