import {TextLinksComponent, ImageLinksComponent} from "../components";

import {womenBrandsData, menBrandsData} from "./data";

const BrandsOptionType = () => {
  const brandsData = womenBrandsData;

  return (
    <div className="brands-option-type-container">
      <div className="brands-top-brands-container">
        <TextLinksComponent
          column={2}
          title="Top Brands"
          links={brandsData.topBrands}
        />
      </div>
      <div className="brands-image-links-one">
        <ImageLinksComponent
          flexDirection="column"
          links={brandsData.imageLinksOne}
        />
      </div>
      <div className="brands-image-links-two">
        <ImageLinksComponent
          flexDirection="column"
          links={brandsData.imageLinksTwo}
        />
      </div>
    </div>
  );
};

export default BrandsOptionType;
