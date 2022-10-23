import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import {useNavigate, useLocation, Link} from "react-router-dom";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import Badge from "@mui/material/Badge";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import {styled} from "@mui/material/styles";

import {BagItemsComponent} from "../../../../";
import {getBagTotalAmount} from "../../../../../assets/functions";
import {useAppDispatch, useAppSelector} from "../../../../../assets/hooks";
import {toggleNavBagDrawer} from "../../../../../state/actions-creator/app";

const StyledBadge = styled(Badge)(({theme}) => ({
  "& .MuiBadge-badge": {
    right: "50%",
    top: "55%",
    color: "#2d2d2d",
  },
}));

const NavbarBagComponent = () => {
  const dispatch = useAppDispatch();

  const show_drawer = useAppSelector(state => state.app.nav_bag_drawer);
  const bag_items = useAppSelector(state => state.product.bag);

  const navigate = useNavigate();
  const location = useLocation();

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
      {bag_items.length > 0 ? (
        <button>
          <StyledBadge badgeContent={bag_items.length}>
            <WorkRoundedIcon fontSize="medium" />
          </StyledBadge>
        </button>
      ) : (
        <Link to="" className="bag-is-empty-button">
          <WorkOutlineRoundedIcon />
        </Link>
      )}

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
