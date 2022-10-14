import {useState, useEffect, useCallback} from "react";
import axios from "axios";

import {productType} from "../../types";
import {rapid_api_key} from "../../../../assets/keys";
import AlsoLikeEachProduct from "./each-product/Each-Product";

interface componentProps {
  cat_id: string;
}

const ProductAlsoLike = ({cat_id}: componentProps) => {
  const [products, setProducts] = useState<productType[]>([]);

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
        {products.map(item => {
          return (
            <AlsoLikeEachProduct key={item.id} cat_id={cat_id} item={item} />
          );
        })}
      </div>
    </div>
  );
};

export default ProductAlsoLike;
