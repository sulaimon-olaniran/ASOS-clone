import {
  TextAvatarComponent,
  ImageLinksComponent,
  TextLinksComponent,
} from "../components";

import {menSportsWearData, womenSportsWearData} from "./data";
import {useAppSelector} from "../../../../../../../assets/hooks";

export const SportsWearOptionType = () => {
  const page = useAppSelector(state => state.app.gender);

  const sportsWearData =
    page === "women" ? womenSportsWearData : menSportsWearData;

  return (
    <div className="sportswear-option-type-container">
      <div className="sportswear-shop-by-product-container">
        <TextLinksComponent
          column={1}
          title="Shop by product"
          links={sportsWearData.productLinks}
          type="sportswear"
        />
      </div>

      <div className="sportswear-shop-by-activity-container">
        <TextAvatarComponent
          header="Shop by activity"
          avatarLinks={sportsWearData.activityLinks}
          type="sportswear"
        />
      </div>

      <div className="sportswear-shop-by-brand-container">
        <TextAvatarComponent
          header="Shop by brand"
          avatarLinks={sportsWearData.brandLinks}
          type="sportswear"
        />
      </div>

      <div className="sportswear-image-links-container">
        <ImageLinksComponent
          links={sportsWearData.imageLinks}
          flexDirection="column"
          type="sportswear"
        />
      </div>
    </div>
  );
};

export default SportsWearOptionType;
