import {
  CloseIcon,
  ChatIcon,
  InformationIcon,
  PackageIcon,
  PersonIcon,
} from "../../../../../assets/icons";

const NavbarAccountComponent = () => {
  return (
    <div className="navbar-account-component">
      <div className="account-icon" />

      <div className="account-options-container">
        <div className="account-options-header">
          <div className="account-header-links-container">
            <a href="#">Sign In</a>
            <span>|</span>
            <a href="#">Join</a>
          </div>

          <span>
            <CloseIcon />
          </span>
        </div>

        <div className="account-options-body">
          <div className="options-body-each-option">
            <PersonIcon /> <p>My Account</p>
          </div>

          <div className="options-body-each-option">
            <PackageIcon /> <p>My Orders</p>
          </div>

          <div className="options-body-each-option">
            <InformationIcon /> <p>Return Information</p>
          </div>

          <div className="options-body-each-option">
            <ChatIcon /> <p>Contact Preferences</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarAccountComponent;
