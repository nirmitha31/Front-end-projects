import React, { Component } from "react";
import "./HeroClassSection.css";

class HeroClassSection extends Component {
  render() {
    const { videoId, date, title, buttonText } = this.props.heroData;

    return (
      <section className="hero">
        <iframe
          className="hero-video"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`}
          title={title}
        />

        <div className="overlay"></div>

        <div className="hero-content">
          <p>{date}</p>
          <h1>{title}</h1>
          <button className="watch-btn">{buttonText} →</button>
        </div>
      </section>
    );
  }
}

export default HeroClassSection;
