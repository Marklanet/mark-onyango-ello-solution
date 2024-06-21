import React from "react";
import "./topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="container flex-between">
        <div className="left flex-start">
          <img
            src="https://cdn.prod.website-files.com/652e0352ad50feae8734edac/652e0352ad50feae8734f392_favicon.png"
            alt=""
          />
          <h1 className="dark-text-gradient">Ello for Teachers</h1>
        </div>
        <div className="right">
          <div className="no-user">
            <button className="dark-btn">Learn More</button>
            <button className="light-btn">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
