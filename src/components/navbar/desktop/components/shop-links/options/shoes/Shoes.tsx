import {
  ImageLinksComponent,
  TextLinksComponent,
  TextAvatarComponent,
} from "../components";

import {useAppSelector} from "../../../../../../../assets/hooks";

import {menShoesData, womenShoesData} from "./data";

const ShoesOptionType = () => {
  const page = useAppSelector(state => state.app.gender);

  const shoesData = page === "women" ? womenShoesData : menShoesData;
  return (
    <div className="shoes-option-type-container">
      <div className="shoes-shop-by-product-container">
        <TextLinksComponent
          title="Shop By Product"
          links={shoesData.productLinks}
          column={1}
          type="shoes"
        />
      </div>
      <div className="shoes-shop-by-brand-container">
        <TextAvatarComponent
          header="Shop by brand"
          avatarLinks={shoesData.brandLinks}
          type="shoes"
        />
      </div>

      <div className="shoes-shop-by-product-container">
        <TextLinksComponent
          title="Shop By Product"
          links={shoesData.productLinksTwo}
          column={1}
          type="shoes"
        />
      </div>

      <div className="shoes-image-links-container">
        <ImageLinksComponent
          links={shoesData.imageLinks}
          flexDirection="column"
          type="shoes"
        />
      </div>
    </div>
  );
};

export default ShoesOptionType;
