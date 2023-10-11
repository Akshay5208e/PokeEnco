import React from "react";
import pokeballLoader from "../assets/pokeball-loader.gif";
function Loader() {
  return (
    <div className="loader">
    <div className="image-container">
      <img src={pokeballLoader} alt="" />
    </div>
  </div>
  );
}

export default Loader;
