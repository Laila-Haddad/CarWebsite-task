import React, { createContext, useState, useEffect } from "react";
import { getCarDetails, getCars, searchByCarName } from "../utils/api";

const CarContext = createContext();
export const CarProvider = ({ children }) => {
  const [cars, setCars] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    getCars()
      .then((items) => {
        setCars(items);
        const allBrands = new Set(items.map((item) => { return { brand:  item.brand , image: item.images[0]}}));
        setBrands(Array.from(allBrands));
      })
      .catch((error) => {
        console.error("Failed to fetch cars:", error);
      });
  }, []);
  

  const value = {
    cars,
    getCarDetails,
    brands,
    searchByCarName,
  };
  return <CarContext.Provider value={value}> {children} </CarContext.Provider>;
};

export default CarContext;
