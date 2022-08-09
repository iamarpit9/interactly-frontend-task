import React from 'react'
import video2 from "../../assets/2.mp4";
import caption from "../../assets/captions2.vtt";
import thumb2 from "../../assets/thumb2.jpeg";
import "../../assets/style.css";

const Video2 = () => {
  return (
    <>
      <div className="video-wrapper">
        <video src={video2} poster={thumb2} controls autoPlay>
          <track
            src={caption}
            label="English"
            kind="captions"
            srcLang="en-us"
            default
          />
        </video>
      </div>
    </>
  );
}

export default Video2