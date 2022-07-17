import {TextLinksComponent, ImageLinksComponent} from "../components";

import {topManData} from "./data";

const TopManOptionType = () => {
  return (
    <div className="top-man-option-type-container">
      <div className="top-man-shop-by-product-container">
        <TextLinksComponent
          column={2}
          title="Shop by Product"
          links={topManData.productLinks}
        />
      </div>
      <div className="top-man-image-links-one">
        <ImageLinksComponent
          flexDirection="column"
          links={topManData.imageLinksOne}
        />
      </div>
      <div className="top-man-image-links-two">
        <ImageLinksComponent
          flexDirection="column"
          links={topManData.imageLinksTwo}
        />
      </div>
    </div>
  );
};

export default TopManOptionType;
