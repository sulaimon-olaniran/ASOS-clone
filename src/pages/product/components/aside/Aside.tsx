import Rating from "@mui/material/Rating";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

import {LikeButton} from "../../../../components/";

import {useAppDispatch, useAppSelector} from "../../../../assets/hooks";
import {
  saveProduct,
  unsaveProduct,
} from "../../../../state/actions-creator/product";
import {getPercentage} from "../../../../assets/functions";
import {productType} from "../../types";

interface componentProps {
  product: productType;
}

const ProductAside = ({product}: componentProps) => {
  //const hasPrevPrice = true;
  const value = 2;

  const saved_products = useAppSelector(state => state.product.saved);
  const dispatch = useAppDispatch();

  const blah = 2345;

  const toggleSaveProduct = () => {
    if (saved_products.includes(blah)) {
      dispatch(unsaveProduct(blah));
    } else {
      dispatch(saveProduct(blah));
    }
  };

  const prevPrice = product.price && product.price.previous;
  const curPrice = product.price && product.price.current;

  const hasPrevPrice = prevPrice?.value && prevPrice?.value !== curPrice?.value;

  return (
    <div className="product-aside-container">
      <div className="product-name-container">
        <h1>{product.name && product.name}</h1>
      </div>

      <div className="product-price-container">
        {hasPrevPrice ? (
          <>
            <span className="prev-price">
              {product.price && product.price.previous.text}
            </span>
            <span className="current-price">
              {product.price && product.price.current.text}
            </span>
            <span className="discount-percentage">
              ({getPercentage(prevPrice?.value || 0, curPrice?.value || 0)}%)
            </span>
          </>
        ) : (
          <span className="product-price">
            {product.price && product.price.current.text}
          </span>
        )}
      </div>

      <div className="product-rating-container">
        <Rating
          defaultValue={product.rating && product.rating.averageOverallRating}
          //precision={0.5}
          readOnly
        />
        <span className="rating-ratio">
          {product.rating && product.rating.averageOverallRating}
        </span>
        <span className="number-of-rates">
          ({product.rating && product.rating.totalReviewCount})
        </span>
      </div>

      <div className="product-colour-container">
        <h1>Colour:</h1>
        <span>{product.variants && product.variants[0].colour}</span>
      </div>

      <div className="product-size-container">
        <div className="size-header-container">
          <h3>Size:</h3>
          <span>
            <div className="icon-circle">
              <span></span>
            </div>
            Find your Fit Assistant size
          </span>
        </div>

        <select>
          <option value="">Please select</option>
          {product.variants &&
            product.variants.map((variant, index) => (
              <option value={variant.brandSize} disabled={!variant.isInStock}>
                {variant.brandSize}
              </option>
            ))}
        </select>
      </div>

      <div className="product-actions-container">
        <div className="add-to-bag-button">
          <span>Add to bag</span>
        </div>

        <div className="add-to-favorite-button-container">
          <LikeButton
            buttonAction={() => console.log("hello world")}
            isLiked={false}
          />
        </div>
      </div>

      <div className="free-delivery-info">
        <div className="top-section">
          <LocalShippingOutlinedIcon />
          <span>Free Delivery.</span>
        </div>

        <div className="link-container">
          <p>
            Ts&Cs apply .
            <span>
              Learn more <span className="icon-span" />
            </span>
          </p>
        </div>
      </div>

      <div className="sizing-help">
        <h1>Sizing Help</h1>
        <p>Still unsure what size to get?</p>
        <span>Find your recommended size.</span>
      </div>
    </div>
  );
};

export default ProductAside;
