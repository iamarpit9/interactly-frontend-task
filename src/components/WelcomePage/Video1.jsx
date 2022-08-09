import React from 'react'
import video1 from "../../assets/1.mp4";
import caption from "../../assets/captions1.vtt";
import thumb1 from "../../assets/thumb1.jpeg";
import "../../assets/style.css";

const Video1 = () => {
  return (
    <>
      <div className="video-wrapper">
        <video src={video1} poster={thumb1} controls autoPlay>
          <track
            src={caption}
            label="English"
            kind="captions"
            srcLang="en-us"
            default
          />
        </video>
        <h1 className="welcomeTxt">Welcome</h1>
      </div>
    </>
  );
}

export default Video1;