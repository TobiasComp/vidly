import React, { Component } from "react";
// he did this with a sfc and passed in the value of the like from the movies
// component this can also be done just the data doesn't match

class Like extends Component {
  state = {
    like: false,
  };

  onSelect = () => {
    let like = !this.state.like;
    this.setState({ like });
  };

  likeView = () => {
    let like = <i className="fa fa-heart" aria-hidden="true"></i>;
    let noLike = <i className="fa fa-heart-o" aria-hidden="true"></i>;
    return this.state.like ? like : noLike;
  };
  render() {
    return (
      <React.Fragment>
        <span onClick={this.onSelect}>{this.likeView()}</span>
      </React.Fragment>
    );
  }
}

export default Like;
