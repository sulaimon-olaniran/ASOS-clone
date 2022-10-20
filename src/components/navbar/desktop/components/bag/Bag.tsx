import {useState} from "react";

import {BagItemsComponent} from "../../../../";

const NavbarBagComponent = () => {
  const [showItems, setShowItems] = useState(false);

  return (
    <div
      className="navbar-bag-component"
      onMouseEnter={() => setShowItems(true)}
      onMouseLeave={() => setShowItems(false)}
    >
      <button>
        <span className="bag-filled-up" />
        <span className="number-of-items">3</span>
      </button>

      <div className={`navbar-bag-contents`}>
        <div
          className={`navbar-bag-contents-inner ${
            showItems && "show-bag-items"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default NavbarBagComponent;
