import React from "react";
import { Carousel } from "antd";
import "./index.css";

const SlideshowWrapper = () => (
  <div>
    <Carousel autoplay dots={"dots"}>
      <div className="carousel-image-1" />
      <div className="carousel-image-2" />
      <div className="carousel-image-3" />
      <div className="carousel-image-4" />
    </Carousel>
  </div>
);

export default SlideshowWrapper;
