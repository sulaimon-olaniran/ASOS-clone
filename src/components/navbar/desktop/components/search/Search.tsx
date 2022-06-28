import {SearchIcon} from "../../../../../assets/icons";

const NavbarSearchComponent = () => {
  return (
    <div className="navbar-search-component-container">
      <input type="text" placeholder="Search for items and brands" />
      <span className="search-icon">
        <SearchIcon />
      </span>
    </div>
  );
};

export default NavbarSearchComponent;
