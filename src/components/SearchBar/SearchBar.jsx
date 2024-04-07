import React, { useState } from "react";
import "./SearchBar.css";
import SearchField from "./SearchField";
import carIcon from "../../assets/car-icon.svg";
import moneyIcon from "../../assets/money-icon.svg";
import brandIcon from "../../assets/brand-icon.svg";
import capacityIcon from "../../assets/capacity-icon.svg";

const filterData = [
  
  { name: "Name", id: "name", icon: carIcon },
  { name: "Brand", id: "brand", icon: brandIcon },
  { name: "Price", id: "price", icon: moneyIcon },
  { name: "Car Type", id: "engine", icon: capacityIcon },
];

const SearchBar = ({ items, handleSearch }) => {
  const [cars, brands] = items;
  const [selectedOptions, setSelectedOptions] = useState({
    name: null,
    brand: null,
    price: null,
    engine: null,
  });

  const brand = brands.map((item) => {
    return { value: item.brand, label: item.brand };
  });
  const brandOptions= [{ value: null, label: "Choose brand" },...brand ]


  const names = cars.map((item) => {
    return {  value: item.name, label: item.brand + " " + item.name };
  });
  const nameOptions= [{ value: null, label: "Choose name" },...names ]

  const priceRanges = [
    { value: null, label: "Choose price" },
    { value: "0-20", label: "Under $20k" },
    { value: "20-30", label: "$20k to $30k" },
    { value: "30-40", label: "$30k to $40k" },
    { value: "40-50", label: "$40k to $50k" },
    { value: "50-100", label: "Over $50k" },
  ];

  const types = [
    { value: null, label: "Choose Type" },

    { value: "Auto", label: "Auto" },
    { value: "Manual", label: "Manual" },
    { value: "CVT", label: "CVT" },
  ];

  const options = [nameOptions, brandOptions, priceRanges, types];

  const handleOptions = (option, attr) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [attr]: option ? option.value : null,
    }));
  };

  return (
    <div id="search-bar">
      <div className="search-filters">
        {filterData.map((filter, index) => (
          <SearchField
            key={index}
            filter={filter}
            options={options[index]}
            handleOptions={handleOptions}
          />
        ))}
      </div>
      <a href="#products">
      <button
        className="filled-btn"
        onClick={() => {
          return handleSearch(selectedOptions);
        }}
      >
        
        Search
      </button></a>
    </div>
  );
};

export default SearchBar;
