import {
  TextLinksComponent,
  TextAvatarComponent,
  BodyFitComponent,
} from "../components";

import {dressesData} from "./data";

const DressesOptionType = () => {
  return (
    <div className="dresses-option-type-container">
      <div className="dresses-shop-by-type-container">
        <TextLinksComponent
          column={1}
          title="Shop by Type"
          links={dressesData.typeLinks}
        />
      </div>
      <div className="dresses-shop-by-length-and-trend">
        <TextLinksComponent
          column={1}
          title="Shop by Length and Trend"
          links={dressesData.lengthAndTrendLinks}
        />
      </div>
      <div className="dresses-shop-by-body-fit">
        <BodyFitComponent
          header="Shop by body fit"
          fits={dressesData.bodyFitLinks}
        />
      </div>
      <div className="dresses-shop-by-color">
        <TextAvatarComponent
          avatarLinks={dressesData.colorLinks}
          header="Shop by colour"
        />
      </div>
    </div>
  );
};

export default DressesOptionType;
