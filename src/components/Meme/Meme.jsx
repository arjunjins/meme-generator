import React from "react";
import "./Meme.css";
import memesData from "./memesData";
const Meme = () => {
  function handleClick() {
    let randomNum = Math.floor(Math.random() * 100);
    let img = memesData.data.memes[randomNum].url;
    let name = memesData.data.memes[randomNum].name;
    console.log("Image ID : " + img);
    console.log("Name : " + name);
  }
  return (
    <main className="meme">
      <div>
        <div className="form">
          <input type="text" placeholder="Top Text" className="inp" />
          <input type="text" placeholder="Bottom Text" className="inp" />
          <button type="submit" className="buttn" onClick={handleClick}>
            Get a new meme image 🖼
          </button>
        </div>
      </div>
    </main>
  );
};

export default Meme;
