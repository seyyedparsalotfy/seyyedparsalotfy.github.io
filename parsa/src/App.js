import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./App.css";
export const SSY = () => {
  return (
    <TypeAnimation
      sequence={["ما پیشگامان آینده دیجیتال هستیم!", 1000]}
      speed={350}
      style={{
        fontSize: "2em",
        whiteSpace: "pre-line",
        height: "195px",
        display: "inline-block",
        position: "relative",

        top: "65%",
        backgroundColor: "#3c556e",
        borderradius: "1em",
        color: "#000",
      }}
    />
  );
};
export const MMY = () => {
  return (
    <TypeAnimation
      sequence={[
        "طراحی سایت ، طراحی رابط و تجربه کاربری ، دیجیتال مارکتینگ",
        1000,
      ]}
      speed={350}
      style={{
        fontSize: "2em",
        whiteSpace: "pre-line",
        height: "195px",
        display: "inline-block",
        position: "relative",

        top: "65%",
        backgroundColor: "#3c556e",
        borderradius: "1em",
        color: "#000",
      }}
    />
  );
};
