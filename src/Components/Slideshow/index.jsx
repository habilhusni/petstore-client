import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Skeleton } from "antd";
import { isUndefinedOrNullOrEmpty } from "../../helper/utils";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const SlideshowWrapper = ({ data }) => {
  var parseData = {};
  var arrPhotos = [];

  if (!isUndefinedOrNullOrEmpty(data.payload.data)) {
    parseData = data.payload.data;
    arrPhotos = parseData.Photos;
  }

  return (
    <Skeleton loading={isUndefinedOrNullOrEmpty(parseData)} size="large">
      <div>
        <Carousel showDots={true} responsive={responsive}>
          {arrPhotos.map((slider, i) => (
            <div
              key={`index-${i}`}
              style={{
                width: "auto",
                height: 500,
                backgroundImage: `url(${slider})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "50% 50%",
              }}
            />
          ))}
        </Carousel>
      </div>
    </Skeleton>
  );
};

export default SlideshowWrapper;
