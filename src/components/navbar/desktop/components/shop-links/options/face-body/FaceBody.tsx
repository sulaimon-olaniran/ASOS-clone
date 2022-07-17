import {TextLinksComponent, ImageLinksComponent} from "../components";

import {menFaceBodyData, womenFaceBodyData} from "./data";

const FaceBodyOptionType = () => {
  const faceBodyData = womenFaceBodyData;
  return (
    <div className="face-body-option-type-container">
      <div className="face-body-shop-by-product-container">
        <TextLinksComponent
          title="Shop by Product"
          column={1}
          links={faceBodyData.productLinks}
        />
      </div>
      <div className="face-body-shop-by-brand-container">
        <TextLinksComponent
          title="Shop by Brand"
          column={1}
          links={faceBodyData.brandLinks}
        />
      </div>
      <div className="face-body-image-links-one">
        <ImageLinksComponent
          flexDirection="column"
          links={faceBodyData.imageLinksOne}
        />
      </div>
      <div className="face-body-image-links-two">
        <ImageLinksComponent
          flexDirection="column"
          links={faceBodyData.imageLinksTwo}
        />
      </div>
    </div>
  );
};

export default FaceBodyOptionType;
