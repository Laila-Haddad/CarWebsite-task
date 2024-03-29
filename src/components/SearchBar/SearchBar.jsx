import React, { useState } from "react";
import "./SearchBar.css";
import SearchField from "./SearchField";
import carIcon from "../../assets/car-icon.png";
import moneyIcon from "../../assets/money-icon.png";
import brandIcon from "../../assets/brand-icon.png";
import capacityIcon from "../../assets/capacity-icon.png";

const filterData = [
  { name: "Name", id: "name", icon: carIcon },
  { name: "Brand", id: "brand", icon: brandIcon },
  { name: "Price", id: "price", icon: moneyIcon },
  { name: "Engine Capacity", id: "engine", icon: capacityIcon },
];

const SearchBar = ({ items, handleSearch }) => {
  const [cars, brands] = items;
  const [selectedOptions, setSelectedOptions] = useState({
    name: null,
    brand: null,
    price: null,
    engine: null,
  });

  const brandOptions = brands.map((item) => {
    return { value: item.brand, label: item.brand };
  });

  const nameOptions = cars.map((item) => {
    return { value: item.name, label: item.brand + " " + item.name };
  });

  const priceRanges = [
    { value: "0-20", label: "Under $20k" },
    { value: "20-30", label: "$20k to $30k" },
    { value: "30-40", label: "$30k to $40k" },
    { value: "40-50", label: "$40k to $50k" },
    { value: "50-100", label: "Over $50k" },
  ];

  const engineRanges = [
    { value: "1-2", label: "1-2L" },
    { value: "2-4", label: "2-4L" },
    { value: "4-6", label: "4-6L" },
    { value: "6-7", label: "6-7L" },
  ];

  const options = [nameOptions, brandOptions, priceRanges, engineRanges];

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
