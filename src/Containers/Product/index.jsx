import React, { Fragment, Component, lazy } from "react";

const HeaderWrapper = lazy(() => import("../../Components/Header"));
const FooterWrapper = lazy(() => import("../../Components/Footer"));
const BodyPrd = lazy(() => import("../../Components/BodyPrd"));
const InfoPrd = lazy(() => import("../../Components/InfoPrd"));

class Product extends Component {
  render() {
    return (
      <Fragment>
        <HeaderWrapper />
        <BodyPrd />
        <InfoPrd />
        <FooterWrapper />
      </Fragment>
    );
  }
}

export default Product;
