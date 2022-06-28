import {useState} from "react";
import {LeftArrowIcon, ArrowRightIcon} from "../../../../assets/icons";

interface componentProps {
  top_wears: {
    image: string;
    title: string;
  }[];
}

const TopWearsSection = ({top_wears}: componentProps) => {
  const [xAxis, setXAxis] = useState(0);

  const handleScrollLeft = (): void => {
    if (xAxis === 0) return;
    setXAxis(prev => prev + 100);
  };

  const handleScrollRight = (): void => {
    if (xAxis < 0) return;
    setXAxis(prev => prev - 100);
  };

  let scrollToken: any = null;

  function mouseEnter(direction: any) {
    scrollToken = setInterval(function () {
      if (direction === "down") {
        // Scroll down, e.g. by using scrollBy
      } else {
        // Scroll up, e.g. by using scrollBy
      }
    }, 3);
  }

  function mouseLeave() {
    clearInterval(scrollToken);
  }

  return (
    <div className="new-styles-section-container">
      <div className="background-image-container" />
      <div className="new-styles-section-inner-container">
        <div className="sale-image-container">
          <img
            src="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/sale-lockups/sale/dt-white/215_40_dt_sale_white_uk_rosv2.png"
            alt=""
          />
        </div>

        <div className="header-container">
          <span>NEW STYLES ADDED!</span>
          <span>UP TO 80% OFF</span>
        </div>

        <div className="carousel-container">
          <div
            className="carousel-button left-button"
            onClick={handleScrollLeft}
          >
            <span className={xAxis === 0 ? "disable" : ""}>
              <LeftArrowIcon />
            </span>
          </div>

          <div
            className="carousel-button right-button"
            onClick={handleScrollRight}
          >
            <span className={xAxis < 0 ? "disable" : ""}>
              <ArrowRightIcon />
            </span>
          </div>

          <div
            className="carousel-items-container"
            //onMouseEnter={handleScrollRight}
          >
            {top_wears.map((wear, index: number) => {
              return (
                <div
                  className={`each-item ${
                    xAxis === -100 && index === 0 && "hide-first-element"
                  } ${xAxis === 0 && index === 6 && "hide-seventh-element"}`}
                  key={index}
                  style={{transform: `translateX(${xAxis}%)`}}
                >
                  <img src={wear.image} alt="" />
                  <div className="item-title">
                    <span>{wear.title}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="new-styles-button-container">
          <span>View all</span>
        </div>

        <small>Limited time only. Selected styles marked down as shown.</small>
      </div>
    </div>
  );
};

export default TopWearsSection;
