import {useState} from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import {IconButton} from "@mui/material";

import ViewedItem from "./viewed-item/Viewd-Item";

const RecentlyViewed = () => {
  const [transform, setTransform] = useState(0);

  const handleNextButton = () => {
    setTransform(prev => prev - 100);
  };

  const handlePrevButton = () => {
    setTransform(prev => prev + 100);
  };

  const arrays = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ];
  return (
    <div className="recently-viewd-container">
      <div className="recently-viewed-header-container">
        <h1>Recently viewed</h1>

        <button>Clear all</button>
      </div>

      <div className="recently-viewed-contents-container">
        <div className="contents-slider-button left-button">
          <ArrowBackIosIcon onClick={handlePrevButton} />
        </div>

        <div className="contents-slider-button right-button">
          <ArrowForwardIosIcon onClick={handleNextButton} />
        </div>

        <div className="recently-viewed-contents-inner-container">
          {arrays.map((items, index) => (
            <div
              className="grouped-product-container"
              key={index}
              style={{transform: `translateX(${transform}%)`}}
            >
              {items.map(item => (
                <ViewedItem key={item} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentlyViewed;
