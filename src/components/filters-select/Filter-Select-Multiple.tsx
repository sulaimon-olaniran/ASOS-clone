import React, {useState, useRef, useEffect} from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DoneIcon from "@mui/icons-material/Done";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import {facetFilterType} from "../../assets/types";

// handleSelect: React.Dispatch<
//   React.SetStateAction<{
//     attribute_1046: string[];
//     priceMin: string[];
//     priceMax: string[];
//     attribute_10147: string[];
//     sort: string[];
//     base_colour: string[];
//     range: string[];
//     attribute_1047: string[];
//     attribute_10155: string[];
//     brand: string[];
//     size: string[];
//   }>
// >;

interface componentProps {
  title: string;
  facetId: string;
  prevOptions: string[];
  handleSelect: React.Dispatch<React.SetStateAction<facetFilterType>>;
  options: {
    count: number;
    id: string;
    name: string;
    isSelected: boolean;
  }[];
  searchable?: boolean;
}

type optionType = {
  count: number;
  id: string;
  name: string;
  isSelected: boolean;
};

const FilterSelectMultiple = ({
  title,
  options,
  handleSelect,
  facetId,
  prevOptions = [],
}: componentProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  //const [selectedOption, setSelectedOption] = useState(defaultOption);
  //const [selectedOptions, setSelectedOptions] = useState<optionType[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<optionType[]>(
    options.filter(item => prevOptions.includes(item.id))
  );
  const [searchValue, setSearchValue] = useState("");
  const [inputActive, setInputActive] = useState(false);

  const searchInputRef = useRef<HTMLInputElement>(null);

  const open = Boolean(anchorEl);

  // console.log("previous options", facetId);

  const handleShowMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleHideMenu = () => {
    setAnchorEl(null);
  };

  const handleSelectOptions = (option: optionType) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(prev => prev.filter(item => item !== option));
    } else {
      setSelectedOptions(prev => [option, ...prev]);
    }
  };

  const handleSelectAllOptions = () => {
    setSelectedOptions(options);
    handleSelect(prev => ({
      ...prev,
      [facetId]: options.map(item => item.id),
    }));
  };

  const handleClearAllOptions = () => {
    setSelectedOptions([]);
    handleSelect(prev => ({
      ...prev,
      [facetId]: [],
    }));
  };

  const filteredOptions = options.filter(
    item => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
  );

  const hanndleSelectFilterItem = (item: optionType) => {
    const value = selectedOptions.join();

    // handleSelect(prev => ({
    //   ...prev,
    //   [facetId]: value,
    // }));
    console.log(facetId);
    handleSelect(prev => ({
      ...prev,
      [facetId]: prev[facetId as keyof facetFilterType]
        ? prev[facetId as keyof facetFilterType].includes(item.id)
          ? prev[facetId as keyof facetFilterType].filter(id => id !== item.id)
          : [item.id, ...prev[facetId as keyof facetFilterType]]
        : [item.id],
    }));
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
        <div className="menu-header-container">
          <div className="menu-header-top-section">
            <div className="menu-selected-items-list">
              <p id="number-of-options">{selectedOptions.length} selected</p>
              <p id="list-of-options">
                {selectedOptions.map(
                  (item, i) =>
                    `${item.name.replace(/ *\([^)]*\) */g, "")}${
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

          {options.length > 15 && (
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
                count: number;
                id: string;
                name: string;
                isSelected: boolean;
              },
              i: number
            ) => {
              return (
                <MenuItem
                  key={i}
                  onClick={() => {
                    handleSelectOptions(item);
                    hanndleSelectFilterItem(item);
                  }}
                  className={`${
                    selectedOptions.includes(item) ? "mui-menu-item-active" : ""
                  }`}
                >
                  {item.name}
                  {` (${item.count})`}
                </MenuItem>
              );
            }
          )}
        </div>
      </Menu>
    </div>
  );
};

export default FilterSelectMultiple;
