import React from "react";
import { TypeAnimation } from "react-type-animation";
export const SSY = () => {
  return (
    <TypeAnimation
      sequence={["ما پیشگامان آینده دیجیتال هستیم!", 1000]}
      speed={200}
      style={{
        fontSize: "2em",
        position: "relative",
        backgroundColor: "gray",
        display: "inline-block",
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
      wrapper="span"
      speed={200}
      style={{
        fontSize: "2em",
        display: "inline-block",
        position: "absolute",
      }}
    />
  );
};
