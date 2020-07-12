import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./index.css";
import { Skeleton } from "antd";
import { isUndefinedOrNullOrEmpty } from "../../helper/utils";

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

const SliderWrapper = ({ data }) => {
  var parseData = [];

  if (data.payload && !isUndefinedOrNullOrEmpty(data.payload.data)) {
    parseData = data.payload.data;
  }

  return (
    <Skeleton
      loading={isUndefinedOrNullOrEmpty(parseData) || parseData.length === 0}
      active
      size="large"
    >
      <h2 style={{ textAlign: "center", marginTop: 50 }}>Other Products</h2>
      <Carousel responsive={responsive} infinite>
        {parseData.map((parse, i) => (
          <div
            key={`index-${i}`}
            style={{
              width: "auto",
              margin: "16px 16px 100px 16px",
              height: 400,
              backgroundImage: `url(${parse.Pictures})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "50% 50%",
            }}
          />
        ))}
      </Carousel>
    </Skeleton>
  );
};

export default SliderWrapper;
