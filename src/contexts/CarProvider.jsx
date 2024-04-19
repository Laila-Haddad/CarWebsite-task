import React, { createContext, useState, useEffect } from "react";
import { getCarDetails, getCars, searchByCarName } from "../utils/api";
import { sortByAtrr } from "../utils/utils";
import { useLocation } from "react-router-dom";


const CarContext = createContext();
export const CarProvider = ({ children }) => {
  const [cars, setCars] = useState([]);
  const [brands, setBrands] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetch = () => {
      getCars()
      .then((items) => {
        sortByAtrr(items ,"brand" )
        setCars(items);
        const uniqueBrands = items.reduce((acc, item) => {
          if (!acc.some((accItem) => accItem.brand === item.brand)) {
            acc.push({ brand: item.brand, image: item.images[0] });
          }
          sortByAtrr(acc ,"brand" )
          return acc;
        }, []);

        setBrands(uniqueBrands);
      })
      .catch((error) => {
        console.error("Failed to fetch cars:", error);
      });
    }

    const routesThatRequireCarData = ['/', '/cars', '/cars/:id'];
    if (routesThatRequireCarData.some(route => location.pathname === route)) {
      fetch()
    }
  }, [location]);

  const value = {
    cars,
    getCarDetails,
    brands,
    searchByCarName,
  };
  return <CarContext.Provider value={value}> {children} </CarContext.Provider>;
};

export default CarContext;