import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { ToggleLink } from "../ToggleLink";
import { connect } from "react-redux";
import { data } from "../data/raw";

class CategoryNavigation extends Component {
  onClickCat = (cat) => {
    let path = this.props.baseUrl;
    if (cat !== "All") {
      path = `${path}/${cat.toLowerCase()}`;
    }
    this.props.history.push({
      pathname: path,
      state: cat,
    });
  };
  render() {
    return (
      <>
        <div
          onClick={() => {
            this.onClickCat("All");
          }}
          exact={true}
        >
          All
        </div>
        {data?.categories &&
          data?.categories?.map((cat) => (
            <div
              onClick={() => {
                this.onClickCat(cat);
              }}
              key={cat}
            >
              {cat}
            </div>
          ))}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { category: state.category, shop: state.shop };
};

export default connect(mapStateToProps, {})(CategoryNavigation);
