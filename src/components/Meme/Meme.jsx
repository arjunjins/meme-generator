import React from "react";
import "./Meme.css";
const Meme = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Top Text" />
        <input type="text" placeholder="Bottom Text" />
        <input type="button" value="Get a new meme image  🖼" />
      </form>
    </div>
  );
};

export default Meme;
