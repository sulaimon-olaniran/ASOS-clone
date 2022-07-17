import {
  ImageLinksComponent,
  TextAvatarComponent,
  TextLinksComponent,
} from "../components";

import {menSummerData, womenSummerData} from "./data";

const SummerOptionType = () => {
  const summerData = womenSummerData;

  return (
    <div className="summer-option-type-container">
      <div className="summer-image-links-container">
        <ImageLinksComponent
          links={summerData.imageLinks}
          flexDirection="row"
        />
      </div>

      <div className="summer-shop-by-product-container">
        <TextLinksComponent
          title="Shop by product"
          column={1}
          links={summerData.productLinks}
        />
      </div>

      <div className="summer-trending-container">
        <TextAvatarComponent
          header="Trending"
          avatarLinks={summerData.trendingLinks}
        />
      </div>

      <div className="summer-image-links-container-2">
        <ImageLinksComponent
          links={summerData.subImageLinks}
          flexDirection="column"
        />
      </div>
    </div>
  );
};

export default SummerOptionType;
