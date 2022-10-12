import {useState, useRef} from "react";
import parse from "html-react-parser";

import {productType} from "../../types";

interface componentProps {
  product: productType;
}

const ProductInformation = ({product}: componentProps) => {
  console.log(product);
  const [showMore, setShowMore] = useState(false);

  const handleToggleShowMore = () => {
    setShowMore(prev => !prev);
  };

  const containerRef = useRef<HTMLDivElement>(null);

  const height = containerRef.current?.clientHeight;

  return (
    <div
      className={`product-information-container ${
        showMore && "show-more-product-information"
      }`}
      style={
        showMore ? {height: `${height && height + 180}px`} : {height: "280px"}
      }
    >
      <div className="each-information-container" ref={containerRef}>
        <h1>Product Details</h1>

        <div className="product-details">
          {parse(product.description ? product.description : "")}
        </div>
      </div>

      <div className="each-information-container">
        <div className="product-code">
          <h1>Product Code</h1>
          <p>{product?.productCode}</p>
        </div>

        <div>
          <h1>Brand</h1>

          <div className="product-brand">
            {product.brand && product.brand.description !== null ? (
              <p>{parse(product.brand ? product.brand?.description : "")}</p>
            ) : (
              <p>No Brand Description</p>
            )}
          </div>
        </div>
      </div>

      <div className="each-information-container">
        {product?.info?.sizeAndFit && (
          <div className="size-and-fit">
            <h1>Size and Fit</h1>

            <p>{parse(product.info ? product.info?.sizeAndFit : "")}</p>
          </div>
        )}

        <div className="look-after-me">
          <h1>Look After Me</h1>

          <p>{product.info?.careInfo && product?.info?.careInfo}</p>
        </div>

        <div className="about-me">
          <h1>About Me</h1>

          <p>{parse(product.info ? product.info?.aboutMe : "")}</p>
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
