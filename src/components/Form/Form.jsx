import React, { useState } from "react";
import style from "./Form.module.css";
import { useTheme } from "../../contexts/ThemeProvider";

const Form = () => {
  const { theme } = useTheme();
  const className = theme === "dark" ? style.dark : "";
  let value = null;


  return (
    <form action={console.log("hi")} className={`${style.form} ${className}`}>
      <div>
        <label htmlFor="name">Name<span> *</span></label>
        <input
        value={value}

          type="text"
          name=""
          id={style.name}
          required
          placeholder="Joe mama" />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input
        value={value}

          type="tel"
          pattern="[0-9]{10}"
          name=""
          id={style.phone}
          placeholder="e.g 1234567890" />
      </div>

      <div style={{ gridColumn: "1/ span 2" }}>
        <label htmlFor="">Email Address<span> *</span></label>
        <input
        value={value}
          type="email"
          name="email"
          id={style.email}
          required
          placeholder="email@example.com" />
      </div>

      <div style={{ gridColumn: "1/ span 2" }}>
        <label htmlFor="message">Message<span> *</span></label>
        <textarea
        value={value}

          required
          name=""
          id={style.message}
          cols="30"
          rows="10"
          placeholder="Let us know what's on your mind"
        ></textarea>
      </div>
      <button
        className="filled-btn"
        style={{
          minWidth: "fit-content",
          width: "40%",
          gridColumn: "1/span 2",
          justifySelf: "center",
        }} >Submit</button>
    </form>
    
  );
};

export default Form;
