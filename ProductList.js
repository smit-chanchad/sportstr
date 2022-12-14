import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/CartActionCreators";
import { data } from "../data/raw";

class ProductList extends Component {
  onClickAddToCart = async (item) => {
    this.props.addToCart(item);
  };
  render() {
    const products = data?.products;
    if (products == null || products.length === 0) {
      return <h5 className="p-2">No Products</h5>;
    }
    return products?.map((p) => (
      <div className="card m-1 p-1 bg-white" key={p.id}>
        <h4>
          {p.name}
          <span className=" badge-pill badge-primary badge text-primary float-right ">
            ₹{p.price.toFixed(2)}
          </span>
        </h4>
        <div className="card-text bg-white p-1">
          {p.description}
          <button
            className="btn btn-success btn-sm float-right"
            onClick={() => {
              this.onClickAddToCart(p);
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    ));
  }
}

const mapStateToProps = (state) => {
  return { shop: state.shop };
};

export default connect(mapStateToProps, { addToCart })(ProductList);
