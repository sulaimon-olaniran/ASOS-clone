import {ASOSLogo} from "../../../assets/icons";
import {Link} from "react-router-dom";
import NavbarAccountComponent from "./components/account/Account";
import NavbarSearchComponent from "./components/search/Search";
import ShopLinksNavbarComponent from "./components/shop-links/ShopLinks";

const DesktopNavbar = () => {
  return (
    <div className="desktop-navbar-container">
      <section className="first-section">
        <div className="section-inner-container">
          <div className="section-button">
            <span>Marketplace</span>
          </div>
          <div className="section-button">
            <span>Help & FAQs</span>
          </div>
          <div className="section-button flag">
            <span>
              <img
                src="https://assets.asosservices.com/storesa/images/flags/ng.png"
                alt="flag"
              />
            </span>
          </div>
        </div>
      </section>

      <section className="second-section">
        <div className="section-inner-container">
          <div className="second-section-left-side">
            <Link to="/" className="logo-container">
              <ASOSLogo />
            </Link>

            <Link to="/women" className="second-section-button-container">
              <span>Women</span>
            </Link>

            <Link to="/men" className="second-section-button-container">
              <span>Men</span>
            </Link>
          </div>

          <div className="second-section-search-container">
            <NavbarSearchComponent />
          </div>

          <div className="second-section-right-side">
            <NavbarAccountComponent />

            <div className="second-section-right-side-button-container">
              <div className="saved-icon" />
            </div>

            <div className="second-section-right-side-button-container">
              <div className="bag-icon" />
            </div>
          </div>
        </div>
      </section>
      <ShopLinksNavbarComponent />
      <section className="third-section">
        <div className="section-inner-container">
          <Link to="/women" className="third-section-button">
            <span>Women</span>
          </Link>

          <div className="third-section-texts-container">
            <span>New styles added!</span>
            <span>Up to 80% off</span>
          </div>

          <Link to="/men" className="third-section-button">
            <span>Men</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DesktopNavbar;
