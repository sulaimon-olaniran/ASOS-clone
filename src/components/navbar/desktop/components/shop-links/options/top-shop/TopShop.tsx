import {TextAvatarComponent, ImageLinksComponent} from "../components";

import {topManData, topShopData} from "./data";

const TopShopOptionType = () => {
  return (
    <div className="top-shop-option-type-container">
      <div className="top-shop-shop-by-product-container">
        <TextAvatarComponent
          column={2}
          header="Shop by Product"
          avatarLinks={topShopData.productLinks}
        />
      </div>
      <div className="top-shop-image-links-one">
        <ImageLinksComponent
          flexDirection="column"
          links={topShopData.imageLinksOne}
        />
      </div>
      <div className="top-shop-image-links-two">
        <ImageLinksComponent
          flexDirection="column"
          links={topShopData.imageLinksTwo}
        />
      </div>
    </div>
  );
};

export default TopShopOptionType;
