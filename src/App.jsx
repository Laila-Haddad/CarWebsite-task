import { useState } from "react";
import "./assets/App.css";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import { Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage/CartPage.jsx";
import ProductDisplay from "./components/ProductCard/ProductDisplay.jsx";


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="cars/:id" element={<DetailsPage />} />
          {/* <Route path="cars" element={<ProductDisplay displayType="grid"/>} /> */}
          <Route path="cart" element={<CartPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
