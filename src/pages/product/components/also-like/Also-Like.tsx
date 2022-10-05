import {useState, useEffect, useCallback} from "react";
import axios from "axios";

import {productType} from "../../types";

type products = {
  products: {
    brandName: string;
  }[];
};

const ProductAlsoLike = () => {
  const [products, setProducts] = useState<productType[]>([]);

  const handleGetAlsoLikeProducts = useCallback(() => {
    const options = {
      method: "GET",
      url: "https://asos2.p.rapidapi.com/products/v2/list",
      params: {
        store: "US",
        offset: "0",
        categoryId: "27110",
        limit: "18",
        country: "US",
        currency: "USD",
        sizeSchema: "US",
        lang: "en-US",
      },
      headers: {
        "X-RapidAPI-Key": "c504a5222fmshe2a3d13657c6e0ep1018ccjsn4c854ec80138",
        "X-RapidAPI-Host": "asos2.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
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
          const prevPrice = item?.price.previous.value !== null;
          return (
            <div key={index} className="each-also-like-product">
              <div className="product-image-container">
                <img src={`https://${item?.imageUrl}`} alt="" />
              </div>

              <div
                className={`product-price-container ${
                  prevPrice && "has-prev-price"
                }`}
              >
                <span className="current-price">
                  {item?.price.current.text} <span>(-33%)</span>
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
