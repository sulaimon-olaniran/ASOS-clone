import LikeButtonComponent from "../../like-button/Like-Button";
import {productType} from "../interface";

import {
  saveProduct,
  unsaveProduct,
} from "../../../state/actions-creator/product";
import {useAppDispatch, useAppSelector} from "../../../assets/hooks";

type componentType = {
  product: productType;
};

const EachProdcut = ({product}: componentType) => {
  const hasPreviousPrice: boolean = product.price.previous.value !== null;

  const saved_products = useAppSelector(state => state.product.saved);
  const dispatch = useAppDispatch();

  const toggleSaveProduct = () => {
    if (saved_products.includes(product.id)) {
      dispatch(unsaveProduct(product.id));
    } else {
      dispatch(saveProduct(product.id));
    }
  };

  return (
    <div className="each-product-container">
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
        <span className="previous-price">{product.price.previous.text}</span>
        <span>{product.price.current.text}</span>
      </div>

      <div className="each-product-discount-percentage">-13%</div>

      <div className="each-product-like-button">
        <LikeButtonComponent
          buttonAction={toggleSaveProduct}
          isLiked={saved_products.includes(product.id)}
        />
      </div>
    </div>
  );
};

export default EachProdcut;
