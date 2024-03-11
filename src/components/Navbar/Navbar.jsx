import React, { useState } from "react";
import logo from "../../assets/Logo.png";
import mycart from "../../assets/my-cart.png";
import "./NavBar.css";
import { Link, useNavigate, NavLink } from "react-router-dom";
import useNavbarBackground from "../../hooks/useNavbarBackground";

const Navbar = () => {
  const [collaps, setCollaps] = useState(false);
  const menuState = () => setCollaps((isCollapsed) => !isCollapsed);
  const menuCollaps = collaps ? `nav-menu-display fade` : "";

  const navigate = useNavigate();
  const hasScrolled = useNavbarBackground();

  return (
    <header>
      <div className={collaps ? "menu-overlay " : ""} onClick={menuState}></div>
      <nav
        style={
          hasScrolled
            ? { backgroundColor: "white", transition: "ease 0.3s" }
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
        <ul className={`nav-menu  ${menuCollaps}`}>
          <li onClick={menuState}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="phone-nav" onClick={menuState}>
            <NavLink to="/cart">My Cart</NavLink>
          </li>
          <li >
            <Link >Catalogue</Link>
          </li>

          <li >
            <Link>Contact Us</Link>
          </li>
          <li >
            <Link >Help</Link>
          </li>

          <li className="phone-nav">
            <button className="bordered-btn">Register</button>
          </li>
        </ul>
        <div className="nav-btns ">
          <img
            src={mycart}
            alt="Show my cart"
            width="25px"
            height="25px"
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/cart");
            }}
          />

          <button className="bordered-btn">Register</button>
        </div>
        <button id="hamburger-btn" onClick={menuState}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            viewBox="0 -960 960 960"
            width="30"
            className="hamburger-menu"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
