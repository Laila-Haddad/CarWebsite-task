import React from "react";
import "./Footer.css";
import logo from "../../assets/Logo.png";
import phone from "../../assets/phone.png";
import email from "../../assets/mail.png";
import location from "../../assets/location.png";

import fb from "../../assets/facebook.png";
import twiter from "../../assets/twiter.png";
import insta from "../../assets/insta.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section logo-section">
        <img
          src={logo}
          id="logo2"
          alt="IPSUM logo"
          width="90px"
          height="auto"
          onClick={() => {
            navigate("/");
          }}
        />
        <h4 style={{ color: "var(--dark-grey)", paddingTop: " 5px" }}>
          CAR COMPANY
        </h4>
      </div>
      <div className="footer-section">
        <h4>Menu</h4>
        <ul>
          <li>Home</li>
          <li>Car Catalogue</li>
          <li>Services</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Further Information</h4>
        <ul>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Contact us</h4>
        <ul>
          <li>
            <img src={location} alt="location" />
            647P+4G5,Seif Al-Doleh, Aleppo, Syria
          </li>
          <li>
            <img src={phone} alt="location" />
            +96323456
          </li>
          <li>
            <img src={email} alt="location" />
            tagred@gmail.com
          </li>
        </ul>
      </div>
      <div className="footer-section socials">
        <h4>Follow us</h4>
        <a>
          <img src={fb} alt="facebook" width="12px" />
        </a>
        <a>
          <img src={twiter} alt="twitter" width="15px" />
        </a>
        <a>
          <img src={insta} alt="instagram" width="15px" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
