import React, {useState} from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface componentProps {
  title: string;
  options: string[];
  defaultOption: string;
}

const FilterSelect = ({title, options, defaultOption}: componentProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedOption, setSelectedOption] = useState(defaultOption);

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
        <span>{title}</span>
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
        <div className="menu-items-container">
          {options.map((item: string, i: number) => {
            return (
              <MenuItem
                key={i}
                onClick={() => {
                  setSelectedOption(item);
                }}
                className={`${
                  item === selectedOption ? "mui-menu-item-active" : ""
                }`}
              >
                {item}
              </MenuItem>
            );
          })}
        </div>
      </Menu>
    </div>
  );
};

export default FilterSelect;
