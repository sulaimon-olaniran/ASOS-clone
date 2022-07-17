import {
  TextLinksComponent,
  BodyFitComponent,
  TextAvatarComponent,
} from "../components";

import {menClothingData} from "./data";

const ClothingOptionType = () => {
  const clothingData = menClothingData;

  return (
    <div className="clothing-option-type-container">
      <div className="clothing-shop-by-product-container">
        <TextLinksComponent
          links={clothingData.productLinks}
          column={2}
          title="Shop by product"
        />
      </div>

      <div className="clothing-shop-by-body-fit-container">
        <BodyFitComponent header="Body Fit" fits={clothingData.bodyFits} />
      </div>

      <div className="clothing-shop-by-edit-container">
        <TextAvatarComponent
          header="Shop by edit"
          avatarLinks={clothingData.edits}
        />
      </div>
    </div>
  );
};

export default ClothingOptionType;
