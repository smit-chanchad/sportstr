import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class CartSummary extends Component {
  getSummary = () => {
    const { cartItems, cartPrice } = this.props.cart;
    console.log("cartItems-----", cartItems);
    if (cartItems > 0) {
      return (
        <span>
          {cartItems} item(s), ${cartPrice?.toFixed(2)}
        </span>
      );
    } else {
      return <span>Your cart: (empty) </span>;
    }
  };

  getLinkClasses = () => {
    const { cartItems } = this.props.cart;
    return `btn btn-sm bg-dark text-white 
            ${cartItems === 0 ? "disabled" : ""}`;
  };

  render() {
    return (
      <div className="float-right">
        <small>
          {this.getSummary()}
          <Link className={this.getLinkClasses()} to="/shop/cart">
            <i className="fa fa-shopping-cart"></i>
          </Link>
        </small>
      </div>
    );
  }
}

const mapStateToProps = (state) => {};

export default connect(mapStateToProps, {})(CartSummary);
