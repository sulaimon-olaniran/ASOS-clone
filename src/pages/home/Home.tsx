import {Link} from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-inner-container">
        <div className="homepage-bg-image-container" />

        <div className="homepage-introduction-container">
          <h1>This is ASOS</h1>
          <p>ASOS DESIGN and 850+ brands</p>
          <div className="introduction-buttons-container">
            <Link to="/women">
              <div>Shop Women</div>
            </Link>

            <Link to="/men">
              <div>Shop Men</div>
            </Link>
          </div>
        </div>

        <div className="homepage-bottom-container">
          <div className="bottom-container-left-side">
            <h2>EASY WORLDWIDE DELIVERY</h2>
            <p>*minimum spends apply</p>
          </div>
          <div className="bottom-container-right-side">
            <h2>
              ASOS DESIGN and 850+ <br /> brands
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
