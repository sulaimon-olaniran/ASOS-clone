import {hero_link_image} from "../../assets/images";
import {TopWearsSection} from "./sections";

interface componentProps {
  data: {
    trending_brands: string[];
    top_wears: {
      image: string;
      title: string;
    }[];
    hero_section: {image: string; text: string};
    features: {
      image: string;
      title: string;
      info: string;
    }[];
    top_two_brands: {
      image: string;
      title: string;
      info: string;
    }[];
  };
}

const ShopPageComponent = ({data}: componentProps) => {
  return (
    <div className="shop-page-component-container">
      <TopWearsSection top_wears={data.top_wears} />

      <section className="asos-hero-design-container">
        <div className="asos-hero-design-inner-container">
          <img src={data.hero_section.image} alt="" />

          <div className="asos-hero-design-text-content-container">
            <section>
              <div className="hero-text-container">
                <h1>{data.hero_section.text}</h1>
              </div>

              <div className="hero-button-container">
                <span>Shop ASOS Design</span>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="shop-page-component-promo-container">
        <div className="promo-inner-container">
          <h1>
            25% OFF EVERYTHING! <br /> NOW LOADING: NEW STUFF
          </h1>

          <p> With code: SHOPYAY</p>

          <small>
            See website banner for Ts&Cs. Selected marked products excluded from
            promo.
          </small>
        </div>
      </section>

      <section className="asos-features-container">
        <div className="asos-features-inner-container">
          {data.features.map(
            (
              feature: {title: string; image: string; info: string},
              index: number
            ) => (
              <div key={index}>
                <img src={feature.image} alt="" />
                <h3>{feature.title}</h3>
                <span>{feature.info}</span>
              </div>
            )
          )}
        </div>
      </section>

      <section className="asos-top-two-brands-contaier">
        <div className="asos-top-two-brands-inner-container">
          {data.top_two_brands.map((brand, index) => {
            return (
              <div className="each-brand-container" key={index}>
                <div className="brand-image-container">
                  <img src={brand.image} alt="" />
                </div>
                <div className="brand-details-container">
                  <h1>{brand.title}</h1>
                  <p>{brand.info}</p>
                  <div className="shop-brand-button-container">
                    <span>Shop the Brand</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="asos-hero-link-container">
        <div className="asos-hero-link-inner-container">
          <div>
            <img src={hero_link_image} alt="hero-link" />
          </div>
        </div>
      </section>

      <section className="asos-trending-brands-container">
        <div className="asos-trending-brands-inner-container">
          <div className="asos-trending-brands-header-container">
            <h1>Trending Brands</h1>
          </div>

          <div className="trending-brands-brands-container">
            {data.trending_brands.map((brand, index) => (
              <div className="each-trending-brand-container" key={index}>
                <img src={brand} alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopPageComponent;
