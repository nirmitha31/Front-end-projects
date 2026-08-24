import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "./postSlice";

function PostForm() {
  const dispatch = useDispatch();

  const [headerText, setHeaderText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [footerText, setFooterText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      headerText,
      imageUrl,
      footerText,
    };

    dispatch(addPost(formData));

    setHeaderText("");
    setImageUrl("");
    setFooterText("");
  };

  return (
    <div>
      <h2>Create Post</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Header text"
          value={headerText}
          onChange={(e) => setHeaderText(e.target.value)}
        />

        <br />

        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <br />

        <input
          type="text"
          placeholder="Footer text"
          value={footerText}
          onChange={(e) => setFooterText(e.target.value)}
        />

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PostForm;
