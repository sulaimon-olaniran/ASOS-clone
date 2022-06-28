import {
  men_hoodies_sweatshirts,
  men_footwears,
  men_shorts_trousers,
  men_sports_wears,
  men_swimwear,
  men_tailoring,
  men_tops,
  tommy_hilfiger_logo,
  north_face_logo,
  nike_logo,
  carhartt_logo,
  ellesse_log,
  dr_martens_logo,
  men_hero_bg,
  men_nike_running,
  men_asos_design_summer_preppy,
  men_asos_design_crochet,
  men_asos_design_neutrals,
  men_top_two_brands_one,
  men_top_two_brands_two,
} from "../../assets/images";
import {ShopPageComponent} from "../../components";

const pageData = {
  trending_brands: [
    tommy_hilfiger_logo,
    north_face_logo,
    nike_logo,
    carhartt_logo,
    ellesse_log,
    dr_martens_logo,
  ],

  top_wears: [
    {
      image: men_footwears,
      title: "Footwear",
    },

    {
      image: men_tops,
      title: "Tops",
    },

    {
      image: men_sports_wears,
      title: "Sport Brands",
    },

    {
      image: men_tailoring,
      title: "Tailoring",
    },

    {
      image: men_hoodies_sweatshirts,
      title: "Hoodies & Sweatshirts",
    },

    {
      image: men_shorts_trousers,
      title: "Shorts & Trousers",
    },

    {
      image: men_swimwear,
      title: "Swimwear",
    },
  ],

  hero_bg: men_hero_bg,

  features: [
    {
      image: men_nike_running,
      title: "Nike Running",
      info: "Sweat in the SWoosh",
    },
    {
      image: men_asos_design_crochet,
      title: "Asos Design Crochet",
      info: "Top-tier textures",
    },
    {
      image: men_asos_design_summer_preppy,
      title: "Preppy Summer Styles",
      info: "Via ASOS DESIGN",
    },
    {
      image: men_asos_design_neutrals,
      title: "ASOS design neutrals",
      info: "Go-with-everything grams",
    },
  ],

  top_two_brands: [
    {
      image: men_top_two_brands_one,
      title: "WEDDING SUITS FT. NOAK",
      info: "Best-dressed guest",
    },

    {
      image: men_top_two_brands_two,
      title: "Topman",
      info: "Bestseller status",
    },
  ],
};

const MenShoppingPage = () => {
  return (
    <div className="men-shopping-page-container">
      <ShopPageComponent data={pageData} />
    </div>
  );
};

export default MenShoppingPage;
