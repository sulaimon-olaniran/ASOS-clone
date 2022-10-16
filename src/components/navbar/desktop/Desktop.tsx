import {Link} from "react-router-dom";

import {ASOSLogo} from "../../../assets/icons";
import NavbarAccountComponent from "./components/account/Account";
import NavbarSearchComponent from "./components/search/Search";
import ShopLinksNavbarComponent from "./components/shop-links/ShopLinks";
import {useAppDispatch} from "../../../assets/hooks";
import {toggleGender} from "../../../state/actions-creator/app";

const DesktopNavbar = () => {
  const dispatch = useAppDispatch();

  const handleToggleGender = (gender: string) => {
    dispatch(toggleGender(gender));
  };

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

            <Link
              className="second-section-button-container"
              onClick={() => handleToggleGender("women")}
              to="/women"
            >
              <span>Women</span>
            </Link>

            <Link
              className="second-section-button-container"
              onClick={() => handleToggleGender("men")}
              to="/men"
            >
              <span>Men</span>
            </Link>
          </div>

          <div className="second-section-search-container">
            <NavbarSearchComponent />
          </div>

          <div className="second-section-right-side">
            <NavbarAccountComponent />

            <Link
              to="/saved-list"
              className="second-section-right-side-button-container"
            >
              <div className="saved-icon" />
            </Link>

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
