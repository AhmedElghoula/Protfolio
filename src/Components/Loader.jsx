import React from "react";
function Loader(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
