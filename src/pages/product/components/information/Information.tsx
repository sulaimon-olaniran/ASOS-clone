import {useState} from "react";
import parse from "html-react-parser";

import {productType} from "../../types";

interface componentProps {
  product: productType;
}

const ProductInformation = ({product}: componentProps) => {
  const [showMore, setShowMore] = useState(false);

  const handleToggleShowMore = () => {
    setShowMore(prev => !prev);
  };

  return (
    <div
      className={`product-information-container ${
        showMore && "show-more-product-information"
      }`}
    >
      <div className="each-information-container">
        <h1>Product Details</h1>

        <div className="product-details">{parse(product?.description)}</div>
      </div>

      <div className="each-information-container">
        <div className="product-code">
          <h1>Product Code</h1>
          <p>{product.productCode}</p>
        </div>

        <div>
          <h1>Brand</h1>

          <div className="product-brand">
            <p>{parse(product?.brand?.description)}</p>
          </div>
        </div>
      </div>

      <div className="each-information-container">
        {product?.info?.sizeAndFit && (
          <div className="size-and-fit">
            <h1>Size and Fit</h1>

            <p>{parse(product?.info?.sizeAndFit)}</p>
          </div>
        )}

        <div className="look-after-me">
          <h1>Look After Me</h1>

          <p>{product?.info?.careInfo}</p>
        </div>

        <div className="about-me">
          <h1>About Me</h1>

          <p>{parse(product?.info?.aboutMe)}</p>
        </div>
      </div>

      <div className="product-information-button-container">
        <div className="show-less-more-button" onClick={handleToggleShowMore}>
          <span>{showMore ? "Show Less" : "Show More"}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
