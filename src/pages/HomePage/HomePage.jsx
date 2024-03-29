import React, { useState, useContext } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./HomePage.css";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import ProductDisplay from "../../components/ProductCard/ProductDisplay";
import LandingSection from "./LandingSection";
import CarContext from "../../contexts/CarProvider";
import { useEffect  } from "react";
import Spinner from "../../components/Spinner/Spinner";

const HomePage = () => {
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
      let [minEngine, maxEngine] = params.engine.split("-").map(Number);

      filteredResults = filteredResults.filter((item) => {
        const engine = Number(item.engine.substring(0, 3));
        return engine >= minEngine && engine < maxEngine;
      });
    }
    setSearchedCars(filteredResults.length > 0 ? filteredResults : []);
  };

  return (
    <>
      <div>
        <LandingSection></LandingSection>
      </div>
      {cars && brands && cars.length>0 ? (
        <>
          <div>
            <SearchBar items={[cars , brands]} handleSearch={handleSearch}></SearchBar>
          </div>
          <div>
            <h2>Find by Car Brand</h2>
            <ImageSlider items={brands} display="home"></ImageSlider>
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
};

export default HomePage;
