import {
  TextAvatarComponent,
  ImageLinksComponent,
  TextLinksComponent,
} from "../components";

import {menAccessoriesData, womenAccessoriesData} from "./data";

const AccessoriesOptionType = () => {
  const accessoriesData = womenAccessoriesData;

  return (
    <div className="accessories-option-type-container">
      <div className="accessories-shop-by-product-container">
        <TextLinksComponent
          title="Shop by product"
          column={1}
          links={accessoriesData.productLinks}
        />
      </div>
      <div className="accessories-shop-by-brand-container">
        <TextAvatarComponent
          header="Shop by Brand"
          avatarLinks={accessoriesData.brandLinks}
        />
      </div>
      <div className="accessories-image-links-container">
        <ImageLinksComponent
          flexDirection="row"
          links={accessoriesData.imageLinks}
        />
      </div>
    </div>
  );
};

export default AccessoriesOptionType;
