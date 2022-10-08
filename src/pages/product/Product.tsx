import {useState, useEffect, useCallback} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
//import ProductGalary from "./components/gallary/Gallary";

import {productType} from "./types";
import {
  ProductAside,
  ProductInformation,
  ProductGallary,
  ProductAlsoLike,
  ProductReviews,
  RecentlyViewed,
} from "./components";

const ProductPage = () => {
  const [product, setProduct] = useState<productType>({});

  const {product_id, category_id} = useParams();

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://asos2.p.rapidapi.com/products/v3/detail",
      params: {id: "203693083", lang: "en-US", store: "US", currency: "USD"},
      headers: {
        "X-RapidAPI-Key": "c504a5222fmshe2a3d13657c6e0ep1018ccjsn4c854ec80138",
        "X-RapidAPI-Host": "asos2.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        //console.log(response.data);
        setProduct(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const media = {
    images: [],
    catwalk: [],
  };

  return (
    <div className="product-page-container">
      <div className="product-page-inner-container">
        <section className="product-page-top-section">
          <ProductGallary media={product?.media} />
          <ProductAside />
        </section>

        <section className="product-information-section">
          <ProductInformation product={product} />
        </section>

        <section className="product-also-like-section">
          <ProductAlsoLike />
        </section>

        <section className="product-reviews-section">
          <ProductReviews />
        </section>

        <section className="product-recently-viewd-section">
          <RecentlyViewed />
        </section>
      </div>
    </div>
  );
};

export default ProductPage;
