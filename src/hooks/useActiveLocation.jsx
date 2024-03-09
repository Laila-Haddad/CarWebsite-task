import React from "react";
import { useLocation } from "react-router-dom";

const useActiveLocation = (location) => {
  let active = "";
  if (location.pathname === "/") active = "home";
  else if (location.pathname === "/cars") active = "catalogue";
  return active;
};

export default useActiveLocation;
