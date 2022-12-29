import React from "react";
import "./Meme.css";
const Meme = () => {
  return (
    <div className="meme container text-center">
      <form>
        <div className="row">
          <input type="text" placeholder="Top Text" className="col-6" />
          <input type="text" placeholder="Bottom Text" className="col-6" />
        </div>
        <div className="row">
          <input
            type="button"
            value="Get a new meme image  🖼"
            className="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default Meme;
