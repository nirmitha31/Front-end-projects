import React from "react";
import { useSelector } from "react-redux";

function MemeGenerator() {
  const posts = useSelector((state) => state.post.posts);

  return (
    <div>
      <h2>Generated Memes</h2>

      {posts.map((post, index) => (
        <div
          key={index}
          style={{
            position: "relative",
            width: "400px",
            margin: "20px auto",
            textAlign: "center",
          }}
        >
          <img
            src={post.imageUrl}
            alt="meme"
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
            }}
          />

          <h1
            style={{
              position: "absolute",
              top: "10px",
              width: "100%",
              color: "white",
              textShadow: "2px 2px 4px black",
            }}
          >
            {post.headerText}
          </h1>

          <h1
            style={{
              position: "absolute",
              bottom: "10px",
              width: "100%",
              color: "white",
              textShadow: "2px 2px 4px black",
            }}
          >
            {post.footerText}
          </h1>
        </div>
      ))}
    </div>
  );
}

export default MemeGenerator;
