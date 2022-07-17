import {
  ImageLinksComponent,
  TextLinksComponent,
  TextAvatarComponent,
} from "../components";

import {menShoesData, womenShoesData} from "./data";

const ShoesOptionType = () => {
  const shoesData = womenShoesData;
  return (
    <div className="shoes-option-type-container">
      <div className="shoes-shop-by-product-container">
        <TextLinksComponent
          title="Shop By Product"
          links={shoesData.productLinks}
          column={1}
        />
      </div>
      <div className="shoes-shop-by-brand-container">
        <TextAvatarComponent
          header="Shop by brand"
          avatarLinks={shoesData.brandLinks}
        />
      </div>

      <div className="shoes-image-links-container">
        <ImageLinksComponent links={shoesData.imageLinks} flexDirection="row" />
      </div>
    </div>
  );
};

export default ShoesOptionType;
