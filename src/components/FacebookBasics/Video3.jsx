import React from 'react'
import video3 from "../../assets/3.mp4";
import caption from "../../assets/captions3.vtt";
import thumb3 from "../../assets/thumb3.jpeg";
import "../../assets/style.css";


const Video3 = () => {
  return (
    <>
      <div className="video-wrapper">
        <video src={video3} poster={thumb3} controls autoPlay>
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

export default Video3