import React, {useState, useRef} from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DoneIcon from "@mui/icons-material/Done";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

interface componentProps {
  title: string;
  options: {name: string; id: string; count: number; isSelected: boolean}[];
  searchable?: boolean;
}

const FilterSelectColor = ({title, options, searchable}: componentProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  //const [selectedOption, setSelectedOption] = useState(defaultOption);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [inputActive, setInputActive] = useState(false);

  const searchInputRef = useRef<HTMLInputElement>(null);

  const open = Boolean(anchorEl);

  const handleShowMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleHideMenu = () => {
    setAnchorEl(null);
  };

  const handleSelectOptions = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(prev => prev.filter(item => item !== option));
    } else {
      setSelectedOptions(prev => [option, ...prev]);
    }
  };

  const handleSelectAllOptions = () => {
    setSelectedOptions(options.map(item => item.name));
  };

  const handleClearAllOptions = () => {
    setSelectedOptions([]);
  };

  const filteredOptions = options.filter(
    item => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
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
            <div
              className={`search-input-container ${
                inputActive ? "search-input-active" : ""
              }`}
            >
              <input
                type="text"
                placeholder="Search"
                onChange={e => setSearchValue(e.target.value)}
                value={searchValue}
                ref={searchInputRef}
                onFocus={() => setInputActive(true)}
                onBlur={() => setInputActive(false)}
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
          {filteredOptions.map(
            (
              item: {
                name: string;
                id: string;
                count: number;
                isSelected: boolean;
              },
              i: number
            ) => {
              return (
                <MenuItem
                  key={i}
                  onClick={() => {
                    handleSelectOptions(item.name);
                  }}
                  className={`color-menu-item-filter-select ${
                    selectedOptions.includes(item.name)
                      ? "mui-menu-item-active"
                      : ""
                  }`}
                >
                  <>
                    <div
                      style={{
                        backgroundColor: `${item.name}`,
                      }}
                      className="menu-item-color"
                    ></div>
                    {item.name} {` (${item.count})`}
                  </>
                </MenuItem>
              );
            }
          )}
        </div>
      </Menu>
    </div>
  );
};

export default FilterSelectColor;
