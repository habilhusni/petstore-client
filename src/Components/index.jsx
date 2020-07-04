import React, { Fragment, lazy } from "react";
import { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import actions from "../actions";

const HeaderWrapper = lazy(() => import("./Header"));
const SlideshowWrapper = lazy(() => import("./Slideshow"));
const BodyhomeWrapper = lazy(() => import("./Bodyhome"));
const CategoriesWrapper = lazy(() => import("./Categories"));
const SliderWrapper = lazy(() => import("./Slider"));
const FooterWrapper = lazy(() => import("./Footer"));

class Home extends Component {
  componentDidMount = () => {
    this.props.getBrands("brdIdf2ln1j18c7");
    this.props.getCategories();
    this.props.getProducts();
  };

  render() {
    const { brand, category, product } = this.props;

    return (
      <Fragment>
        <HeaderWrapper />
        <SlideshowWrapper data={brand} />
        <BodyhomeWrapper data={product} />
        <CategoriesWrapper data={category} />
        <SliderWrapper data={product} />
        <FooterWrapper />
      </Fragment>
    );
  }
}

Home.propTypes = {
  getBrands: PropTypes.func.isRequired,
  brand: PropTypes.object.isRequired,
  getCategories: PropTypes.func.isRequired,
  category: PropTypes.object.isRequired,
  getProducts: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  brand: state.brand,
  category: state.category,
  product: state.product,
});

const mapDispatchToProps = (dispatch) => ({
  getBrands: (brandID) => dispatch(actions.getBrands(brandID)),
  getCategories: (catID) => dispatch(actions.getCategories(catID)),
  getProducts: (prodID) => dispatch(actions.getProducts(prodID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
