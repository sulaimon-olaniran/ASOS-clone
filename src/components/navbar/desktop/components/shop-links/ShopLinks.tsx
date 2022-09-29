import {useState} from "react";

import {
  AccessoriesOption,
  BrandsOption,
  ClothingOptionType,
  DressesOption,
  FaceBodyOption,
  MarketPlaceOption,
  NewInOption,
  OutletOption,
  SaleOption,
  ShoesOption,
  SportsWearOption,
  SummerOption,
  TopManOption,
  TopShopOption,
  TrendingNowOption,
} from "./options";

interface linksObject {
  title: string;
  link: string;
}

type linksType = linksObject[];

const ShopLinksNavbarComponent = () => {
  const [optionType, setOptionType] = useState("");

  const handleShowNavOptions = (option: string): void => {
    setOptionType(option);
  };

  const links: linksType = [
    {
      title: "Sale",
      link: "/men/sale",
    },

    {
      title: "New in",
      link: "/New/in",
    },

    {
      title: "Clothing",
      link: "/men/clothing",
    },
    {
      title: "Shoes",
      link: "/men/clothing",
    },
    {
      title: "Sportswear",
      link: "/men/clothing",
    },
    {
      title: "Accessories",
      link: "/men/clothing",
    },
    {
      title: "Summer",
      link: "/men/clothing",
    },
    {
      title: "Trending now",
      link: "/men/clothing",
    },
    {
      title: "Topman",
      link: "/men/clothing",
    },
    {
      title: "Face + Body",
      link: "/men/clothing",
    },
    {
      title: "Brands",
      link: "/men/clothing",
    },
    {
      title: "Outlet",
      link: "/men/clothing",
    },
    {
      title: "Marketplace",
      link: "/men/clothing",
    },
  ];

  return (
    <nav className="shopping-links-navbar-component">
      <div className="shoping-links-navbar-component-inner-container">
        {links.map(link => (
          <div
            key={link.title}
            className={`shopping-link-button ${
              link.title === "Sale" ? "add-red-background" : null
            }
            ${link.title === "Outlet" ? "add-red-background" : null}
            ${optionType === link.title ? "link-button-is-active" : null}
             
            `}
            onMouseOver={() => handleShowNavOptions(link.title)}
          >
            <p>{link.title}</p>
          </div>
        ))}
        <div className="shopping-links-navbar-options-container">
          <div className="navbar-options-inner-container">
            {optionType.toLowerCase() === "sale" && <SaleOption />}
            {optionType.toLowerCase() === "new in" && <NewInOption />}
            {optionType.toLowerCase() === "clothing" && <ClothingOptionType />}
            {optionType.toLowerCase() === "shoes" && <ShoesOption />}
            {optionType.toLowerCase() === "sportswear" && <SportsWearOption />}
            {optionType.toLowerCase() === "accessories" && (
              <AccessoriesOption />
            )}
            {optionType.toLowerCase() === "summer" && <SummerOption />}
            {optionType.toLowerCase() === "trending now" && (
              <TrendingNowOption />
            )}
            {optionType.toLowerCase() === "topman" && <TopShopOption />}
            {optionType.toLowerCase() === "face + body" && <FaceBodyOption />}
            {optionType.toLowerCase() === "brands" && <DressesOption />}
            {optionType.toLowerCase() === "outlet" && <OutletOption />}
            {optionType.toLowerCase() === "marketplace" && (
              <MarketPlaceOption />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ShopLinksNavbarComponent;

{
  /* <img
  class="img"
  data-bind="attr: imageSources().hero, event: { onload: window.asos.performance.markAndMeasure('pdp:gallery_image_'+$index()+'_displayed')}"
  sizes="(max-width: 720px) 100vw, (min-width: 720px) 513px"
  alt="London Rebel X quilted sliders in green, 1 of 4"
  src="https://images.asos-media.com/products/london-rebel-x-quilted-sliders-in-green/201648686-1-green?$n_640w$&amp;wid=513&amp;fit=constrain"
  srcset="https://images.asos-media.com/products/london-rebel-x-quilted-sliders-in-green/201648686-1-green?$n_640w$&amp;wid=513&amp;fit=constrain 513w,https://images.asos-media.com/products/london-rebel-x-quilted-sliders-in-green/201648686-1-green?$n_750w$&amp;wid=750&amp;fit=constrain 750w,https://images.asos-media.com/products/london-rebel-x-quilted-sliders-in-green/201648686-1-green?$n_960w$&amp;wid=952&amp;fit=constrain 952w,https://images.asos-media.com/products/london-rebel-x-quilted-sliders-in-green/201648686-1-green?$n_1280w$&amp;wid=1125&amp;fit=constrain 1125w,https://images.asos-media.com/products/london-rebel-x-quilted-sliders-in-green/201648686-1-green?$n_1920w$&amp;wid=1926&amp;fit=constrain 1926w"
  style="visibility: visible; width: 100%; height: 100%;"
></img>; */
}
