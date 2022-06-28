import DesktopNavbar from "./desktop/Desktop";

const NavbarComponent = () => {
  return (
    <nav className="navbar-component-container">
      <div className="desktop-navbar-container">
        <DesktopNavbar />
      </div>
      <div className="mobile-navbar-container"></div>
    </nav>
  );
};

export default NavbarComponent;
