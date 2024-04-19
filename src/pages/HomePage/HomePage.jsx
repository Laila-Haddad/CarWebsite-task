import React  , {useContext}from "react";
import LandingSection from "./LandingSection";
import Catalog from "../CatalogPage/CatalogPage";
import "./HomePage.css";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import CarContext from "../../contexts/CarProvider";

const HomePage = () => {
  const {  brands } = useContext(CarContext);

  return (
    <>

      <LandingSection></LandingSection>
      <div>
        <h2 className="imgslider-h2">Find by Car Brand</h2>
        <ImageSlider items={brands} display="home"></ImageSlider>
      </div>
      <Catalog />
    </>
  );
};

export default HomePage;
