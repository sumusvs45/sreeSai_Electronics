import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { v4 as uuidv4 } from 'uuid';
import acer_logo from '../assets/acer_logo.jpg';
import asus_logo from '../assets/asus_logo.png';
import brother_logo from '../assets/brother_logo.png';
import canon_logo from '../assets/canon_logo.png';
import cp_logo from '../assets/cp_logo.jpg';
import dell from '../assets/dell.png';
import epson_logo from '../assets/epson_logo.jpg';
import hikvision_logo from '../assets/hikvision_logo.png';
import hp_logo from '../assets/hp_logo.png';
import lenovo_logo from '../assets/lenovo_logo.png';
import lg_logo from '../assets/lg_logo.png';
import samsung_logo from '../assets/samsung_logo.png';

const HomeCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const partnerLogos = [
    acer_logo, asus_logo, brother_logo, canon_logo, cp_logo, dell,
    epson_logo, hikvision_logo, hp_logo, lenovo_logo, lg_logo, samsung_logo,
  ];

  return (
    <div className="slider-container overflow-hidden mt-11">
      <h2 className="section__header ">Our Brands</h2>
      <Slider {...settings}>
        {partnerLogos.map((logo) => (
          <div key={uuidv4()} className="flex justify-center items-center p-2">
            <img
              className="carousel-logo w-32 h-32 object-contain" // Adjust width & height as needed
              src={logo}
             
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeCarousel; 