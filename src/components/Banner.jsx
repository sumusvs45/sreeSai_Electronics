import React from "react";
import image from "../assets/hero Banner.png";

const Banner = () => {
  return (
    <section className="relative w-full h-screen ">
      {/* Full-width Background Image */}
      <div className="pt-11">
        <img
          src={image}
          alt="Banner Image"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Banner;


