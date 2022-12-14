import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { data } from "../data/placeHolderData";
import { ToggleLink } from "../ToggleLink";
import { connect } from "react-redux";
import { data } from "../data/raw";

class CategoryNavigation extends Component {
  render() {
    console.log("this.props.baseUrl", this.props.baseUrl);
    return (
      <>
        <ToggleLink to={this.props.baseUrl} exact={true}>
          All
        </ToggleLink>
        {data?.categories &&
          data?.categories?.map((cat) => (
            <ToggleLink
              key={cat}
              to={`${this.props.baseUrl}/${cat.toLowerCase()}`}
            >
              {cat}
            </ToggleLink>
          ))}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { category: state.category };
};

export default connect(mapStateToProps, {})(CategoryNavigation);
