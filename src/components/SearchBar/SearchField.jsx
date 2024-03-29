import React from 'react'
import Select from "react-select";
import "./SearchBar.css";

const customStyles = {
    control: (provided, state ) => ({
      ...provided,
      width: "110px",
      border: "none",
      borderRadius: "5px",
      color: "var(--dark-grey)",
      fontSize: "15px",
      cursor: "pointer",
      userSelect: "none",
      boxShadow: state.isFocused ? null : null,
  
      "& *": {
        // margin: "0",
        // padding: 0
      },
    }),
  };


const SearchField = ({filter , options , handleOptions} ) => {
  return (
    <div className="filter" >
            <h4>{filter.name}</h4>
            <div className="filter-menu">
              <img src={filter.icon} alt={filter.name} />
              <Select
                isClearable
                onChange={(option) =>
                  option ? handleOptions(option, filter.id) : handleOptions(null, filter.id) 
                }
                options={options}
                styles={customStyles}
              />
            </div>
          </div>
  )
}

export default SearchField