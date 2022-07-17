import {
  TextAvatarComponent,
  BodyFitComponent,
  ImageLinksComponent,
} from "../components";

import {menTrendingNowData, womenTrendingNowData} from "./data";

const TrendingNowOpitonType = () => {
  const trendingNowData = womenTrendingNowData;

  return (
    <div className="trending-now-option-type-container">
      <div className="trending-now-most-wanted">
        <TextAvatarComponent
          header="Most Wanted"
          avatarLinks={trendingNowData.mostWantedLinks}
        />
      </div>

      <div className="trending-now-new-drops">
        <BodyFitComponent
          header="New Drops"
          fits={trendingNowData.newDropsLinks}
        />
      </div>

      <div className="trending-now-image-links-one">
        <ImageLinksComponent
          flexDirection="column"
          links={trendingNowData.imageLinksOne}
        />
      </div>

      <div className="trending-now-image-links-two">
        <ImageLinksComponent
          flexDirection="column"
          links={trendingNowData.imageLinksTwo}
        />
      </div>
    </div>
  );
};

export default TrendingNowOpitonType;
