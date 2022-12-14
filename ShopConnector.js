import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setProductData, setCartegoryData } from "../actions/ActionCreators";
import Shop from "./Shop";
// import { data } from "../data/placeHolderData";

import {
  addToCart,
  updateCartQuantity,
  removeFromCart,
  clearCart,
} from "../actions/CartActionCreators";
import { CartDetails } from "./CartDetails";
import { data } from "../data/raw";

const filterProducts = (products = [], category) =>
  !category || category === "All"
    ? products
    : products.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
      );

class ShopConnector extends Component {
  componentDidMount() {
    this.props.setProductData(data);
    this.props.setCartegoryData(data?.categories);
  }

  render() {
    console.log("shop props", this.props);
    return (
      <Switch>
        <Route
          path="/shop/products/:category?"
          render={(routeProps) => (
            <Shop
              {...this.props}
              {...routeProps}
              products={filterProducts(
                this.props.products,
                routeProps.match.params.category
              )}
            />
          )}
        />
        <Route
          path="/shop/cart"
          render={(routeProps) => (
            <CartDetails {...this.props} {...routeProps} />
          )}
        />
        <Redirect to="/shop/products" />
      </Switch>
    );
  }
}

const mapStateToProps = (state) => {
  return { shop: state };
};

export default connect(mapStateToProps, {
  setProductData,
  setCartegoryData,
  addToCart,
  updateCartQuantity,
  removeFromCart,
  clearCart,
})(ShopConnector);
