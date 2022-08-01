import React from "react";
import banner from "../assets/images/vbc.jpg";

const BusinessSummary = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-white"></div>
    </div>
  );
};

export default BusinessSummary;
