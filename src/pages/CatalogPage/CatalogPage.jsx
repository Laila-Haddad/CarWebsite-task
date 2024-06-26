import React, { useState, useContext , useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";

import ProductDisplay from "../../components/ProductCard/ProductDisplay";
import CarContext from "../../contexts/CarProvider";
import Spinner from "../../components/Spinner/Spinner";


const Catalog = () => {
    const { cars, brands, searchByCarName } = useContext(CarContext);
    const [searchedCars, setSearchedCars] = useState([]);
  
    useEffect(() => {
      setSearchedCars(cars);
    }, [cars]);
  
    const handleSearch = (params) => {
      if (params.name) {
        searchByCarName(params.name).then((results) => {
          applyFiltersAndSetResults(results, params);
        });
      } else {
        applyFiltersAndSetResults(cars, params);
      }
    };
  
    const applyFiltersAndSetResults = (dataset, params) => {
      let filteredResults = dataset;
  
      if (params.brand) {
        filteredResults = filteredResults.filter(
          (item) => item.brand === params.brand
        );
      }
  
      if (params.price) {
        let [minPrice, maxPrice] = params.price.split("-").map(Number);
        [minPrice, maxPrice] = [minPrice * 1000, maxPrice * 1000];
        filteredResults = filteredResults.filter((item) => {
          const price = item.rentPrice;
          return price >= minPrice && price < maxPrice;
        });
      }
  
      if (params.engine) {
  
        filteredResults = filteredResults.filter(
          (item) => item.type === params.engine
        );
      }
      setSearchedCars(filteredResults.length > 0 ? filteredResults : []);
    };
  
    const items=[cars , brands]
    return (
      <>

        {cars && brands && cars.length>0 ? (
          <>

            <div>
              <SearchBar items={items} handleSearch={handleSearch}></SearchBar>
            </div>

            <div id="products">
              <h2>Top Categories</h2>
              {searchedCars.length>0 ? (
                <ProductDisplay
                  items={searchedCars}
                  displayType="grid"
                ></ProductDisplay>
              ) : (
                <h4>No results found...</h4>
              )}
            </div>
          </>
        ) : (
          <Spinner />
        )}
      </>
    );
}

export default Catalog