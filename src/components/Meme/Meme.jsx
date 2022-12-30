import React from "react";
import "./Meme.css";
const Meme = () => {
  return (
    <main className="meme">
      <div>
        <div className="form">
          <input type="text" placeholder="Top Text" className="inp" />
          <input type="text" placeholder="Bottom Text" className="inp" />
          <button type="submit" className="buttn">
            Get a new meme image 🖼
          </button>
        </div>
      </div>
    </main>
  );
};

export default Meme;
