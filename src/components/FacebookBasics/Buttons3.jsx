import React from 'react'
import "../../assets/style.css";

const Buttons3 = (props) => {
  return (
    <>
      <div className="btn-group">
        <button className="btn2" onClick={props.toggleBool}>
          Sign up for free webinar
        </button>
      </div>
    </>
  );
}

export default Buttons3