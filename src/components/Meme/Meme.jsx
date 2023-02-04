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
        <div className="meme-pic">
        <img src={meme.randomImage} alt="Random meme" className="meme-image" />
        <h2 className="meme-pic-text top">One does not simple</h2>
        <h2 className="meme-pic-text bottom">Walk into Mordor</h2>
        </div>
      </div>
    </main>
  );
};

export default Meme;

//Added comment
