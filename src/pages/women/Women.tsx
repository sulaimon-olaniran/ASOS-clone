import {useEffect} from "react";

import {
  women_hero_bg,
  women_party_looks,
  women_mainstage_fits,
  women_swim_stuff,
  women_revolution,
  women_dresses,
  women_tops,
  women_shoes,
  women_short_and_trousers,
  women_accessories,
  women_sport_brands,
  women_swimwear,
  women_top_two_brands_one,
  women_top_two_brands_two,
  monkl_logo,
  never_fully_dressed_logo,
  collution_logo,
  reclaimed_vintage_logo,
  topshop_logo,
  weekday_logo,
} from "../../assets/images";

import {ShopPageComponent} from "../../components";

const pageData = {
  trending_brands: [
    monkl_logo,
    never_fully_dressed_logo,
    collution_logo,
    reclaimed_vintage_logo,
    topshop_logo,
    weekday_logo,
  ],

  top_wears: [
    {
      image: women_dresses,
      title: "Dresses",
    },

    {
      image: women_tops,
      title: "Tops",
    },

    {
      image: women_shoes,
      title: "Shoes",
    },

    {
      image: women_short_and_trousers,
      title: "Shorts and Trousers",
    },

    {
      image: women_accessories,
      title: "Accessories",
    },

    {
      image: women_sport_brands,
      title: "Sports Brands",
    },

    {
      image: women_swimwear,
      title: "Swimwear",
    },
  ],

  hero_section: {image: women_hero_bg, text: "It's soft girl szn"},

  features: [
    {
      image: women_party_looks,
      title: "Nike Running",
      info: "Sweat in the SWoosh",
    },
    {
      image: women_mainstage_fits,
      title: "Asos Design Crochet",
      info: "Top-tier textures",
    },
    {
      image: women_swim_stuff,
      title: "Preppy Summer Styles",
      info: "Via ASOS DESIGN",
    },
    {
      image: women_revolution,
      title: "ASOS design neutrals",
      info: "Go-with-everything grams",
    },
  ],

  top_two_brands: [
    {
      image: women_top_two_brands_one,
      title: "ASOS Luxe",
      info: "Moment-makers",
    },

    {
      image: women_top_two_brands_two,
      title: "Collusion",
      info: "Grunge girl summer",
    },
  ],
};

const WomenShoppingPage = () => {
  useEffect(() => {
    return () => {
      console.log("cleaned up");
    };
  }, []);

  return (
    <div className="Women-shopping-page-container">
      <ShopPageComponent data={pageData} />
    </div>
  );
};

export default WomenShoppingPage;
