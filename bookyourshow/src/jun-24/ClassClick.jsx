import React, { Component } from "react";

class ClassClick extends Component {
  handleClick = () => {
    console.log("i have clicked button in class");
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Class Click</button>
      </div>
    );
  }
}

export default ClassClick;
