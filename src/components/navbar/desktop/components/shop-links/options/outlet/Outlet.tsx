import {
  TextLinksComponent,
  ImageLinksComponent,
  BodyFitComponent,
} from "../components";

import {menOutletData, womenOutletData} from "./data";

const OutletOptionType = () => {
  const outletData = womenOutletData;

  return (
    <div className="outlet-option-type-container">
      <div className="outlet-shop-by-product-container">
        <TextLinksComponent
          column={2}
          title="Shop by Product"
          links={outletData.productLinks}
        />
      </div>

      <div className="outlet-shop-by-body-fit-container">
        <BodyFitComponent
          fits={outletData.bodyFitLinks}
          header="Shop by Body Fit"
        />
      </div>

      {/* <div className="outlet-shop-by-brand-container">
        <TextLinksComponent
          column={1}
          title="Shop by Brand"
          links={outletData.brandLinks}
        />
      </div> */}

      <div className="outlet-image-links-container">
        <ImageLinksComponent
          flexDirection="column"
          links={outletData.imageLinks}
        />
      </div>
    </div>
  );
};

export default OutletOptionType;
