import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import ProductGalary from "./components/gallary/Gallary";
import {ProductAside} from "./components";

const ProductPage = () => {
  const [product, setProduct] = useState({});

  const {product_id, category_id} = useParams();

  useEffect(() => {}, []);

  const media = {
    images: [],
    catwalk: [],
  };

  return (
    <div className="product-page-container">
      <div className="product-page-inner-container">
        <section className="product-page-top-section">
          <ProductGalary media={media} />
          <ProductAside />
        </section>
      </div>
    </div>
  );
};

export default ProductPage;
