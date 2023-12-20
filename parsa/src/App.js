import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./App.css";

const MMY = () => {
  return (
    <TypeAnimation
      style={{ whiteSpace: "pre-line", height: "195px", display: "block" }}
      sequence={[
        `ما پیشگامان آینده دیجیتال هستیم!\n
          
        طراحی سایت ، طراحی رابط و تجربه کاربری ، دیجیتال مارکتینگ`,
        1000,
        "",
      ]}
      repeat={Infinity}
    />
  );
};
export default MMY;
