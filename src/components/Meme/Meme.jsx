import React from "react";
import "./Meme.css";
import memesData from "./memesData";
import { useState } from "react";
const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);
  function handleClick() {
    let randomNum = Math.floor(Math.random() * allMemeImages.data.memes.length);
    let img = allMemeImages.data.memes[randomNum].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: img,
      };
    });
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
        <img src={meme.randomImage} alt="Random meme" className="meme-image" />
      </div>
    </main>
  );
};

export default Meme;
