import React, { Component, PureComponent } from "react";

class Pure extends PureComponent {
  constructor() {
    super();
    this.state = { name: "David" };
  }

  handleClick = () => {
    this.setState({ name: "David" });
  };

  render() {
    console.log("i am rendering");
    return (
      <>
        <h1>Name: {this.state.name}</h1>
        <button onClick={this.handleClick}>Click</button>
      </>
    );
  }
}

export default Pure;
