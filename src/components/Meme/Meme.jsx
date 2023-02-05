import React from "react";
import "./Meme.css";
import { useState, useEffect } from "react";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });


  const [allMeme, setAllMeme] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMeme(data));
  }, []);


  function handleClick() {
    let randomNum = Math.floor(Math.random() * allMeme.data.memes.length);
    let img = allMeme.data.memes[randomNum].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: img,
      };
    });
  }


  function handleEvent(event) {
    let { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }


  return (
    <main className="meme">
      <div className="center">
        <div className="form">
          <input
            type="text"
            placeholder="Top Text"
            className="inp"
            name="topText"
            value={meme.topText}
            onChange={handleEvent}
          />
          <input
            type="text"
            placeholder="Bottom Text"
            className="inp"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleEvent}
          />
          <button type="submit" className="buttn" onClick={handleClick}>
            Get a new meme image 🖼
          </button>
        </div>
        <div className="meme-pic">
          <img
            src={meme.randomImage}
            alt="Random meme"
            className="meme-image"
          />
          <h2 className="meme-pic-text top">{meme.topText}</h2>
          <h2 className="meme-pic-text bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </main>
  );
};

export default Meme;
