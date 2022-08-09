import React from "react";
import "../assets/style.css";
import Buttons1 from "./WelcomePage/Buttons1";
import Video1 from "./WelcomePage/Video1";

export const WelcomePage = () => {
  return (
    <>
      <div className="container">
     <Video1/>
     <Buttons1/>
       
      </div>
    </>
  );
};

export default WelcomePage;
