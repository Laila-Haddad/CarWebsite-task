import React, { useState, useEffect, useContext } from "react";
import logo from "../../assets/Logo.png";
import mycart from "../../assets/my-cart.png";
import "./NavBar.css";
import { Link, useNavigate, NavLink, useLocation } from "react-router-dom";
import useNavbarBackground from "../../hooks/useNavbarBackground";
import CartContext from "../../contexts/CartProvider";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { useTheme } from "../../contexts/ThemeProvider";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const setMenuState = () => setIsOpen((isisOpened) => !isisOpened);
  const fade = isOpen ? "nav-menu-display fade-in" : " fade-out ";
  setTimeout(() => {
    document.querySelector(".fade-out")?.classList.add("boob");
  }, 500);

  const navigate = useNavigate();
  const hasScrolled = useNavbarBackground();
  const location = useLocation();
  const { theme } = useTheme();

  let style =
    theme == "dark"
      ? location.pathname != "/cart"
        ? "darkNavScroll"
        : hasScrolled
        ? "darkNavScroll"
        : "darkNavNo"
      : null;

  const { cart, cartLength } = useContext(CartContext);
  const [itemNumber, setItemNumber] = useState(0);

  useEffect(() => {
    setItemNumber(cart ? cartLength : 0);
  }, [cart]);

  return (
    <header>
      <div
        className={isOpen ? `menu-overlay` : ""}
        onClick={setMenuState}
      ></div>
      <nav
        style={
          hasScrolled
            ? { backgroundColor: "var(--white)", transition: "ease 0.3s" }
            : { backgroundColor: "transparent", transition: "ease 0.3s" }
        }
      >
        <img
          src={logo}
          id="logo"
          alt="IPSUM logo"
          width="120px"
          height="100%"
          onClick={() => {
            navigate("/");
          }}
        />
        <ul className={`nav-menu ${fade} ${style} `}>
          <li onClick={setMenuState}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="phone-nav" onClick={setMenuState}>
            <NavLink to="/cart">My Cart</NavLink>
          </li>
          <li>
            <NavLink to="/cars">Catalogue</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
          <li>
            <Link>Help</Link>
          </li>

          <li className="phone-nav">
            <button className="bordered-btn">Register</button>
          </li>
        </ul>
        <div className="nav-btns ">
          <div
            className="cart-phone"
            style={{ position: "relative", cursor: "pointer" }}
            onClick={() => {
              navigate("/cart");
            }}
          >
            <img src={mycart} alt="Show my cart" width="25px" height="25px" />
            <span className={style}>{itemNumber}</span>
          </div>
          <button className="bordered-btn">Register</button>
          <ThemeSwitch />
        </div>
        <div id="hamburger-btn">
          <HamburgerMenu setMenuState={setMenuState} isOpen={isOpen} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
