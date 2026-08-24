import { Component } from "react";

class LikeButton extends Component {
  constructor() {
    super();

    this.state = {
      likes: 0,
    };
  }

  increaseLike = () => {
    this.setState({
      likes: this.state.likes + 1,
    });
  };

  render() {
    return (
      <div className="card">
        <h2 style={{ color: "red", backgroundColor: "yellow" }}>
          👍 Like Counter
        </h2>

        <h1>{this.state.likes}</h1>

        <button onClick={this.increaseLike}>Like 👍</button>
      </div>
    );
  }
}

export default LikeButton;
