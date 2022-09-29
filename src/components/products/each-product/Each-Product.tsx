import {HeartIcon, SavedItemsIcon} from "../../../assets/icons";

import LikeButtonComponent from "../../like-button/Like-Button";

interface componentProps {
  product: {
    id: number;
    name: string;
    imageUrl: string;
    price: {
      currency: string;
      current: {
        value: number;
        text: string;
      };
      previous: {
        value?: number;
        text?: string;
      };
    };
  };
}

const EachProdcut = ({product}: any) => {
  return (
    <div className="each-product-container">
      <div className="product-image-container">
        <img src={`https://${product.imageUrl}`} alt="product" />
      </div>
      <div className="product-name-container">
        <span>{product?.name}</span>
      </div>
      <div className="product-price-container">
        <span>{product.price.current.text}</span>
      </div>

      <div className="each-product-like-button">
        <LikeButtonComponent />
      </div>
    </div>
  );
};

export default EachProdcut;
