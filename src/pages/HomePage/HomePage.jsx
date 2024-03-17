import React, { useState, useEffect , useContext } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./HomePage.css";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import ProductDisplay from "../../components/ProductCard/ProductDisplay";
import { getCars, getBrands } from "../../utils/api";
import LandingSection from "./LandingSection";



const HomePage = () => {
  const [cars, setCars] = useState([]);
  const [brands, setBrands] = useState([]);


  useEffect(() => {
    getCars().then(setCars);
    getBrands().then(setBrands);
  }, []);
  return (
    <>
      {cars && (
        <>
          <div>
            <LandingSection></LandingSection>
          </div>
          <div>
            <SearchBar></SearchBar>
          </div>
          <div>
            <h2>Find by Car Type</h2>
            <ImageSlider items={brands} display="home"></ImageSlider>
          </div>
          <div  id="products">
            <h2>Top Categories</h2>
            <ProductDisplay items={cars} displayType="grid"></ProductDisplay>
          </div>
        </>
      )}
    </>
  );
};

export default HomePage;
