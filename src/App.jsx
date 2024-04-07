import React, { useEffect } from "react";
import "./assets/App.css";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import CartPage from "./pages/CartPage/CartPage.jsx";
import ProductDisplay from "./components/ProductCard/ProductDisplay.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { CartProvider } from "./contexts/CartProvider.jsx";
import { CarProvider } from "./contexts/CarProvider.jsx";

import { NotFound } from "./pages/NotFoundPage/NotFound.jsx";
import CookieConsent from "./components/CookieConsent/CookieConsent.jsx";
import { useCookies } from "react-cookie";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch.jsx";
import { ThemeProvider } from "./contexts/ThemeProvider.jsx";
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [cookies] = useCookies(["consent"]);

  return (
    <div>
      <ScrollToTop />
      <CartProvider>
        <CarProvider>
          <ThemeProvider>
            <Navbar />

          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cars/:id" element={<DetailsPage />} />
              {/* <Route path="cars" element={<ProductDisplay displayType="grid"/>} /> */}
              <Route path="/cart" element={<CartPage />} />
              <Route path="/notFound" element={<NotFound />} />
              <Route path="*" element={<Navigate to="/notFound" replace />} />
            </Routes>
            {!cookies.consent && <CookieConsent />}
          </main>
          </ThemeProvider>

        </CarProvider>
      </CartProvider>
      <Footer />
    </div>
  );
}

export default App;
