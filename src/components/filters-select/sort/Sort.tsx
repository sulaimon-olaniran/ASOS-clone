import React, {useState} from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const SortFilterSelect = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedItem, setSelectedItem] = useState("Recommended");

  const items = [
    "Recommended",
    "What's new",
    "Price high to low",
    "Price low to high",
  ];

  const open = Boolean(anchorEl);

  const handleShowMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleHideMenu = () => {
    setAnchorEl(null);
    console.log("hello world");
  };

  return (
    <div className="filter-select-container">
      <button
        className={`filter-select-button-container ${
          open ? "filter-select-show-menu" : ""
        }`}
        onClick={handleShowMenu}
      >
        <span>Sort</span>
        <KeyboardArrowDownIcon />
      </button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleHideMenu}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {items.map((item: string) => {
          return (
            <MenuItem
              onClick={() => {
                setSelectedItem(item);
              }}
              className={`${
                item === selectedItem ? "mui-menu-item-active" : ""
              }`}
            >
              {item}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

export default SortFilterSelect;
