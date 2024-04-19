import React ,{ useState } from "react";
import  "./HamburgerMenu.css";

const HamburgerMenu = ({setMenuState , isOpen}) => {
//     const [isOpen, setIsOpen] = useState(false)
    
//   const checkHandler = () => {
//     setIsOpen(!isOpen)
//     console.log(isOpen);
//   }
  return (
    <>
      <input
        hidden
        className="check-icon"
        id="check-icon"
        name="check-icon"
        type="checkbox"
        checked={isOpen}
        onChange={setMenuState}
      />
      <label className="icon-menu" htmlFor="check-icon">
        <div className="bar bar--1"></div>
        <div className="bar bar--2"></div>
        <div className="bar bar--3"></div>
      </label>
    </>
  );
};

export default HamburgerMenu;
