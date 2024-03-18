import React, { useEffect } from "react";
import "./assets/App.css";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import { Routes, Route, useLocation } from "react-router-dom";
import CartPage from "./pages/CartPage/CartPage.jsx";
import ProductDisplay from "./components/ProductCard/ProductDisplay.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { CartProvider } from "./contexts/CartProvider.jsx";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div>
      <ScrollToTop />
      <CartProvider>
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="cars/:id"
              element={
                <div>
                  <DetailsPage />
                </div>
              }
            />
            {/* <Route path="cars" element={<ProductDisplay displayType="grid"/>} /> */}
            <Route path="cart" element={<CartPage />} />
          </Routes>
        </main>
      </CartProvider>
      <Footer />
    </div>
  );
}

export default App;
