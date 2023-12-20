import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./App.css";

const MMY = () => {
  return (
    <TypeAnimation
      style={{
        whiteSpace: "pre-line",
        height: "195px",

        color: "white",
        fontSize: "25px",
        margin: "0",
        padding: "0",
      }}
      sequence={[
        `ما پیشگامان آینده دیجیتال هستیم!             \n
          
        طراحی سایت ، طراحی رابط و تجربه کاربری ، دیجیتال مارکتینگ\n 
        
        founded by seyyed parsa lotfy`,
        1000,
      ]}
    />
  );
};
export default MMY;
