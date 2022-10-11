import {Link} from "react-router-dom";

import LikeButtonComponent from "../../like-button/Like-Button";
import {productType} from "../interface";

import {
  saveProduct,
  unsaveProduct,
} from "../../../state/actions-creator/product";
import {useAppDispatch, useAppSelector} from "../../../assets/hooks";

type componentType = {
  product: productType;
  category_id: string;
};

const EachProdcut = ({product, category_id}: componentType) => {
  const hasPreviousPrice: boolean = product.price.previous.value !== null;

  const dispatch = useAppDispatch();

  const saved_products = useAppSelector(state => state.product.saved);
  const gender = useAppSelector(state => state.app.gender);

  const toggleSaveProduct = () => {
    if (saved_products.includes(product.id)) {
      dispatch(unsaveProduct(product.id));
    } else {
      dispatch(saveProduct(product.id));
    }
  };

  // path="/men/product/:name/:product_id/:category_id"

  const link_product_name = product.name
    .replace(" - ", " ")
    .replace(new RegExp(" ", "g"), "-")
    .toLocaleLowerCase();

  const link_path = `/${gender}/product/${link_product_name}/${product.id}/${category_id}`;

  return (
    <Link to={link_path} className="each-product-container">
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
    </Link>
  );
};

export default EachProdcut;
