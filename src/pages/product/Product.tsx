import {useState, useEffect} from "react";
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
import {rapid_api_key} from "../../assets/keys";
import {useAppDispatch, useAppSelector} from "../../assets/hooks";
import {addToRecentlyViewed} from "../../state/actions-creator/product";

const ProductPage = () => {
  const [product, setProduct] = useState<productType>({});

  const {product_id, category_id} = useParams();

  const dispatch = useAppDispatch();

  const recently_viewed = useAppSelector(
    state => state.product.recently_viewed
  );

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://asos2.p.rapidapi.com/products/v3/detail",
      params: {id: product_id, lang: "en-US", store: "US", currency: "USD"},
      headers: {
        "X-RapidAPI-Key": rapid_api_key,
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
  }, [product_id]);

  useEffect(() => {
    const converted_product_id = parseInt(product_id || "");
    const data = {
      id: converted_product_id,
      image: (product.media && product.media.images[0].url) || "",
      name: product.name || "",
    };

    dispatch(addToRecentlyViewed(data));
  }, [product_id, dispatch, product]);

  return (
    <div className="product-page-container">
      <div className="product-page-inner-container">
        <section className="product-page-top-section">
          <ProductGallary media={product?.media} />
          <ProductAside product={product} cat_id={category_id || ""} />
        </section>

        <section className="product-information-section">
          <ProductInformation product={product} />
        </section>

        <section className="product-also-like-section">
          <ProductAlsoLike cat_id={category_id || ""} />
        </section>

        <section className="product-reviews-section">
          <ProductReviews />
        </section>

        {recently_viewed.length > 0 && (
          <section className="product-recently-viewd-section">
            <RecentlyViewed cat_id={category_id || ""} />
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
