import {
  TextAvatarComponent,
  ImageLinksComponent,
  TextLinksComponent,
} from "../components";

import {menSportsWearData, womenSportsWearData} from "./data";

export const SportsWearOptionType = () => {
  const sportsWearData = womenSportsWearData;

  return (
    <div className="sportswear-option-type-container">
      <div className="sportswear-shop-by-product-container">
        <TextLinksComponent
          column={1}
          title="Shop by product"
          links={sportsWearData.productLinks}
        />
      </div>

      <div className="sportswear-shop-by-activity-container">
        <TextAvatarComponent
          header="Shop by activity"
          avatarLinks={sportsWearData.activityLinks}
        />
      </div>

      <div className="sportswear-shop-by-brand-container">
        <TextAvatarComponent
          header="Shop by brand"
          avatarLinks={sportsWearData.brandLinks}
        />
      </div>

      <div className="sportswear-image-links-container">
        <ImageLinksComponent
          links={sportsWearData.imageLinks}
          flexDirection="column"
        />
      </div>
    </div>
  );
};

export default SportsWearOptionType;
