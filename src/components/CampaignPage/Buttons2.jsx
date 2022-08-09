import React from 'react'
import { Link } from "react-router-dom";
import "../../assets/style.css";

const Buttons2 = (props) => {
  return (
    <>
      <div className="btn-group">
        <Link to="">
          <button className="btn2" onClick={props.toggleBool}>
            Download "Campaign Structure Guide"
          </button>
        </Link>
      </div>
    </>
  );
}

export default Buttons2