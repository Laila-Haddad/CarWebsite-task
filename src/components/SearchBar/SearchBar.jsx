import React from "react";
import "./SearchBar.css";
import carIcon from "../../assets/car-icon.png";
import moneyIcon from "../../assets/money-icon.png";
import brandIcon from "../../assets/brand-icon.png";
import capacityIcon from "../../assets/capacity-icon.png";

const filterData = [
  { name: "Name", placeholder: "Choose name", icon: carIcon },
  { name: "Price", placeholder: "Choose price", icon: moneyIcon },
  { name: "Brand", placeholder: "Choose brand", icon: brandIcon },
  { name: "Engine Capacity", placeholder: "Choose capacity", icon: capacityIcon },

];

const SearchBar = () => {
  return (
    <div id="search-bar">
      <div className="search-filters">
        {filterData.map((filter, index) => (
          <div className="filter" key={index}>
            <h4>{filter.name}</h4>
            <div className="filter-menu">
              <img src={filter.icon} alt={filter.name.toLowerCase()} />
              <select className="dropdown">
                <option value="">{filter.placeholder}</option>
                <option value="">{filter.placeholder}</option>
              </select>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-360 280-560h400L480-360Z" className=" arrow-down"/></svg>
            </div>
          </div>
        ))}
      </div>
      <button className="filled-btn">Search</button>
    </div>
  );
};

export default SearchBar;
