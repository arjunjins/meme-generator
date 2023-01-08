import React from "react";
import "./Meme.css";
import memesData from "./memesData";
import { useState } from "react";
const Meme = () => {
  let img, name;
  function handleClick() {
    let randomNum = Math.floor(Math.random() * memesData.data.memes.length);
    img = memesData.data.memes[randomNum].url;
    name = memesData.data.memes[randomNum].name;
    getMemeImage();
  }

  const [memeImage, setMemeImage] = useState("");
  function getMemeImage() {
    setMemeImage(img);
  }

  return (
    <main className="meme">
      <div className="center">
        <div className="form">
          <input type="text" placeholder="Top Text" className="inp" />
          <input type="text" placeholder="Bottom Text" className="inp" />
          <button type="submit" className="buttn" onClick={handleClick}>
            Get a new meme image 🖼
          </button>
        </div>
        <img src={memeImage} alt="Random meme" className="meme-image" />
      </div>
    </main>
  );
};

export default Meme;
