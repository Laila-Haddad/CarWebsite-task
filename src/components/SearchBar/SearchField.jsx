import React from "react";
import Select from "react-select";
import "./SearchBar.css";
import { useTheme } from "../../contexts/ThemeProvider";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    width: "130px",
    border: "none ",
    borderRadius: "5px",
    color: "var(--dark-grey)",
    fontSize: "15px",
    cursor: "pointer",
    userSelect: "none",
    boxShadow: state.isFocused ? null : null,
    backgroundColor: "transparent",
  }),
};

const SearchField = ({ filter, options, handleOptions }) => {
  return (
    <div className="filter">
      <div className="filter-menu">
        <img src={filter.icon} alt={filter.name}  />
        <h4>{filter.name}</h4>
      </div>

      <Select
        // isClearable
        onChange={(option) =>
          option
            ? handleOptions(option, filter.id)
            : handleOptions(null, filter.id)
        }
        placeholder={options[0].label}
        options={options}
        styles={customStyles}
      />
    </div>
  );
};

export default SearchField;
