import {
  TextLinksComponent,
  BodyFitComponent,
  TextAvatarComponent,
} from "../components";

import {useAppSelector} from "../../../../../../../assets/hooks";
import {menClothingData, womenClothingData} from "./data";

const ClothingOptionType = () => {
  const page = useAppSelector(state => state.app.gender);

  const clothingData = page === "men" ? menClothingData : womenClothingData;

  return (
    <div className="clothing-option-type-container">
      <div className="clothing-shop-by-product-container">
        <TextLinksComponent
          links={clothingData.productLinks}
          column={2}
          title="Shop by product"
          type="clothing"
        />
      </div>

      <div className="clothing-shop-by-body-fit-container">
        <BodyFitComponent
          header="Body Fit"
          fits={clothingData.bodyFits}
          type="clothing"
        />
      </div>

      <div className="clothing-shop-by-edit-container">
        <TextAvatarComponent
          header="Shop by edit"
          avatarLinks={clothingData.edits}
          type="clothing"
        />
      </div>
    </div>
  );
};

export default ClothingOptionType;
