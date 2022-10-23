import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import {useNavigate, useLocation} from "react-router-dom";

import {BagItemsComponent} from "../../../../";
import {getBagTotalAmount} from "../../../../../assets/functions";
import {useAppDispatch, useAppSelector} from "../../../../../assets/hooks";
import {toggleNavBagDrawer} from "../../../../../state/actions-creator/app";

const NavbarBagComponent = () => {
  const dispatch = useAppDispatch();

  const show_drawer = useAppSelector(state => state.app.nav_bag_drawer);
  const bag_items = useAppSelector(state => state.product.bag);

  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  const handleShowDrawer = () => {
    // DISABLE BAG ITEMS DROP DOWN IF THERE ARE NO ITEMS OR USER IS CURRENTLY ON THE BAG PAGE

    if (bag_items.length === 0 || location.pathname === "/shopping-bag") return;
    dispatch(toggleNavBagDrawer(true));
  };

  const handleHideDrawer = () => {
    dispatch(toggleNavBagDrawer(false));
  };

  const handleGoToBagRoute = () => {
    if (bag_items.length > 0) return;

    navigate("/shopping-bag");
  };

  return (
    <div
      className="navbar-bag-component"
      onMouseEnter={handleShowDrawer}
      onMouseLeave={handleHideDrawer}
    >
      <button onClick={handleGoToBagRoute}>
        <span className="bag-filled-up" />
        <span className="number-of-items">3</span>
      </button>

      <div className={`navbar-bag-contents`}>
        <div
          className={`navbar-bag-contents-inner ${
            show_drawer && "show-bag-items"
          }`}
        >
          <div className="navbar-bag-contents-header">
            <h1>
              My bag , <span>{bag_items.length} items</span>
            </h1>

            <button>
              <CloseOutlinedIcon />
            </button>
          </div>

          <div className="navbar-bag-items-container">
            <BagItemsComponent used_in="drop-down" />
          </div>

          <div className="navbar-bag-sub-total-container">
            <p>Sub-total</p>

            <p>{getBagTotalAmount(bag_items)}</p>
          </div>

          <div className="navbar-bag-checkout-container">
            <div className="view-bag-button">
              <span>View Bag</span>
            </div>

            <div className="checkout-button">
              <span>Checkout</span>
            </div>
          </div>

          <div className="navbar-bag-delivery-info">
            <span>Free Delivery Worldwide*</span>
            <p>
              More info
              <span>here</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarBagComponent;
