import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeProvider";
import found from "/found.svg";
import foundDark from "/found-dark.svg";

export const NotFound = () => {
  const navigate = useNavigate();
  const {theme} = useTheme();

  return (
    <>
      <img
        src={theme === "light" ? found : foundDark}
        alt=""
        width="100px"
        height="100px"
        className={theme === "light" ? "notFound" : "notFoundDark"}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "calc(90vh - 90px )",
        }}
      >
        <br></br>
        <br></br>

        <h2 style={{ color: "var(--pink)", fontSize: "70px", padding: "0" }}>
          404
        </h2>
        <br></br>
        <br></br>

        <h6>Oops! Page not found.</h6>
        <p style={{ maxWidth: "400px", textAlign: "center" }}>
          We could not find the page you are looking for. Please check the
          address and try again.
        </p>

        <br></br>
        <br></br>

        <button
          onClick={() => navigate("/")}
          className="filled-btn"
          style={{ width: "max-content", padding: "0 15px", fontSize: "15px" }}
        >
          Go home
        </button>
      </div>
    </>
  );
};
