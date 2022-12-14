import React, { Component } from "react";
import ProductList from "./ProductList";
import CartSummary from "./CartSummary";
import CategoryNavigation from "./Navbar";
import { connect } from "react-redux";

class Shop extends Component {
  // handleAddToCart = (...args) => {
  //   this.props.addToCart(...args);
  //   this.props.history.push("/shop/cart");
  // };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col bg-dark text-white">
            <div className="navbar-brand">SPORTS STORE</div>
            <CartSummary cart={this.props.cart} />
          </div>
        </div>
        <div className="row">
          <div className="col-3 p-2">
            <CategoryNavigation baseUrl="/shop/products" />
          </div>
          <div className="col-9 p-2">
            <ProductList />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { cart: state.cart };
};

export default connect(mapStateToProps, {})(Shop);
