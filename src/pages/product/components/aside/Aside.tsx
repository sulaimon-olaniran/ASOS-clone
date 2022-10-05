import Rating from "@mui/material/Rating";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

import LikeButtonComponent from "../../../../components/like-button/Like-Button";

const ProductAside = () => {
  const hasPrevPrice = true;
  const value = 2;
  return (
    <div className="product-aside-container">
      <div className="product-name-container">
        <h1>ASOS DESIGN trainers in white</h1>
      </div>

      <div className="product-price-container">
        {hasPrevPrice ? (
          <>
            <span className="prev-price">£18.00</span>
            <span className="current-price">£15.00</span>
            <span className="discount-percentage">(-13%)</span>
          </>
        ) : (
          <span className="product-price">£34.00</span>
        )}
      </div>

      <div className="product-rating-container">
        <Rating defaultValue={value} precision={0.5} readOnly />
        <span className="rating-ratio">2.4</span>
        <span className="number-of-rates">(27)</span>
      </div>

      <div className="product-colour-container">
        <h1>Colour:</h1>
        <span>White</span>
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
          <option value="">UK 6</option>
          <option value="">UK 6 Wide Fit</option>
          <option value="" disabled={true}>
            UK 7 - Out of stock
          </option>
          <option value="">UK 7 Wide Fit</option>
          <option value="">UK 8</option>
          <option value="" disabled={true}>
            UK 8 Wide Fit - Out of stock
          </option>
          <option value="">UK 9</option>
          <option value="">UK 9 Wide Fit</option>
          <option value="">UK 10</option>
          <option value="">UK 10 Wide Fit</option>
        </select>
      </div>

      <div className="product-actions-container">
        <div className="add-to-bag-button">
          <span>Add to bag</span>
        </div>

        <div className="add-to-favorite-button-container">
          <LikeButtonComponent
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
