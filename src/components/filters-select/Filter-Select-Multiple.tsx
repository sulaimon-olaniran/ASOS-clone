import React, {useState} from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DoneIcon from "@mui/icons-material/Done";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

interface componentProps {
  title: string;
  options: string[];
  defaultOption: string;
  searchable?: boolean;
}

const FilterSelectMultiple = ({
  title,
  options,
  searchable,
  defaultOption,
}: componentProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  //const [selectedOption, setSelectedOption] = useState(defaultOption);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState("");

  const open = Boolean(anchorEl);

  const handleShowMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleHideMenu = () => {
    setAnchorEl(null);
    console.log("hello world");
  };

  const handleSelectOptions = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(prev => prev.filter(item => item !== option));
    } else {
      setSelectedOptions(prev => [option, ...prev]);
    }
  };

  const handleSelectAllOptions = () => {
    setSelectedOptions(options);
  };

  const handleClearAllOptions = () => {
    setSelectedOptions([]);
  };

  const filteredOptions = options.filter(
    item => item.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
  );

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
        <div className="menu-header-container">
          <div className="menu-header-top-section">
            <div className="menu-selected-items-list">
              <p id="number-of-options">{selectedOptions.length} selected</p>
              <p id="list-of-options">
                {selectedOptions.map(
                  (item, i) =>
                    `${item.replace(/ *\([^)]*\) */g, "")}${
                      i !== selectedOptions.length - 1 ? "," : ""
                    } `
                )}
              </p>
            </div>

            {searchValue === "" &&
              (selectedOptions.length === options.length ? (
                <button
                  className="menu-select-all-button"
                  onClick={handleClearAllOptions}
                >
                  <span>Clear</span>
                </button>
              ) : (
                <button
                  className="menu-select-all-button"
                  onClick={handleSelectAllOptions}
                >
                  <DoneIcon />
                  <span>All</span>
                </button>
              ))}
          </div>

          {searchable && (
            <div className="search-input-container">
              <input
                type="text"
                placeholder="Search"
                onChange={e => setSearchValue(e.target.value)}
                value={searchValue}
              />
              {searchValue === "" ? (
                <SearchIcon />
              ) : (
                <ClearIcon
                  onClick={() => setSearchValue("")}
                  sx={{cursor: "pointer"}}
                />
              )}
            </div>
          )}
        </div>

        <div className="menu-items-container">
          {filteredOptions.map((item: string) => {
            return (
              <MenuItem
                onClick={() => {
                  handleSelectOptions(item);
                }}
                className={`${
                  selectedOptions.includes(item) ? "mui-menu-item-active" : ""
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

export default FilterSelectMultiple;
