import {useState} from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import axios from "axios";
import rateLimit from "axios-rate-limit";

import ViewedItem from "./viewed-item/Viewd-Item";

import {useAppDispatch, useAppSelector} from "../../../../assets/hooks";
import {clearRecentlyViewed} from "../../../../state/actions-creator/product";

const sliceIntoChunks = (arr: number[], chunkSize: number) => {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
};

const RecentlyViewed = () => {
  const [transform, setTransform] = useState(0);
  const [index, setIndex] = useState(0);

  const dispatch = useAppDispatch();

  const recently_viewed = useAppSelector(
    state => state.product.recently_viewed
  );

  const sliced_recently_viewed = sliceIntoChunks(recently_viewed, 4);

  const handleClearRecentlyViewed = () => {
    dispatch(clearRecentlyViewed());
  };

  const handleNextButton = () => {
    if (
      transform === (recently_viewed.length - 1) * -100 ||
      recently_viewed.length <= 4
    )
      return;
    setTransform(prev => prev - 100);
    setIndex(prev => prev + 1);
  };

  const handlePrevButton = () => {
    if (transform === 0) return;
    setTransform(prev => prev + 100);
    setIndex(prev => prev - 1);
  };

  const handleJumpToIndex = (i: number) => {
    setIndex(i);
    setTransform(i * -100);
  };

  const http = rateLimit(axios.create(), {
    maxRequests: 4,
    perMilliseconds: 1000,
    maxRPS: 4,
  });

  return (
    <div className="recently-viewd-container">
      <div className="recently-viewed-header-container">
        <h1>Recently viewed</h1>

        <button onClick={handleClearRecentlyViewed}>Clear all</button>
      </div>

      <div className="recently-viewed-contents-container">
        <div
          className={`contents-slider-button left-button ${
            transform === 0 && "is-disabled"
          }`}
        >
          <ArrowBackIosIcon onClick={handlePrevButton} />
        </div>

        <div
          className={`contents-slider-button right-button ${
            transform === (recently_viewed.length - 1) * -100 ||
            (recently_viewed.length <= 4 && "is-disabled")
          }`}
        >
          <ArrowForwardIosIcon onClick={handleNextButton} />
        </div>

        <div className="recently-viewed-contents-inner-container">
          {sliced_recently_viewed.map((items, i) => (
            <div
              className="grouped-product-container"
              key={i}
              style={{transform: `translateX(${transform}%)`}}
            >
              {items.map((item, i) => (
                <ViewedItem key={i} id={item} http={http} />
              ))}
            </div>
          ))}
        </div>

        <div className="recently-viewed-carousel-buttons">
          {recently_viewed.map((item, i) => (
            <div
              key={i}
              className={`${index === i && "is-current"}`}
              onClick={() => handleJumpToIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentlyViewed;
