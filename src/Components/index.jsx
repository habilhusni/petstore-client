import React, { Fragment, lazy } from "react";

const HeaderWrapper = lazy(() => import("./Header"));
const SlideshowWrapper = lazy(() => import("./Slideshow"));
const BodyhomeWrapper = lazy(() => import("./Bodyhome"));
const CategoriesWrapper = lazy(() => import("./Categories"));
const SliderWrapper = lazy(() => import("./Slider"));
const FooterWrapper = lazy(() => import("./Footer"));

const Home = () => (
  <Fragment>
    <HeaderWrapper />
    <SlideshowWrapper />
    <BodyhomeWrapper />
    <CategoriesWrapper />
    <SliderWrapper />
    <FooterWrapper />
  </Fragment>
);
export default Home;
