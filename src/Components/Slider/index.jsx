import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import slider1 from "../../assets/slider/slider-1.jpg";
import slider2 from "../../assets/slider/slider-2.jpg";
import slider3 from "../../assets/slider/slider-3.jpg";
import slider4 from "../../assets/slider/slider-4.jpg";
import slider5 from "../../assets/slider/slider-5.jpg";
import slider6 from "../../assets/slider/slider-6.jpg";
import slider7 from "../../assets/slider/slider-7.jpg";
import slider8 from "../../assets/slider/slider-8.jpg";
import slider9 from "../../assets/slider/slider-9.jpg";
import slider10 from "../../assets/slider/slider-10.jpg";

const arrSlider = [
  slider1,
  slider2,
  slider3,
  slider4,
  slider5,
  slider6,
  slider7,
  slider8,
  slider9,
  slider10,
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const SliderWrapper = () => (
  <Carousel responsive={responsive} infinite>
    {arrSlider.map((slider, i) => (
      <div
        key={`index-${i}`}
        style={{
          width: "auto",
          margin: "16px 16px 100px 16px",
          height: 400,
          backgroundImage: `url(${slider})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 50%",
        }}
      />
    ))}
  </Carousel>
);

export default SliderWrapper;
