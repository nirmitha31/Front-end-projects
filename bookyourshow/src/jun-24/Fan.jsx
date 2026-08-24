import React, { Component } from "react";

class Fan extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  handleClick() {
    this.setState({ count: count + 1 });
  }
  render() {
    return (
      <div>
        <h1 style={{ backgroundColor: "red" }}>Hello : {this.state.count}</h1>
        <button onClick={() => this.handleClick()}>Click</button>
      </div>
    );
  }
}

export default Fan;
