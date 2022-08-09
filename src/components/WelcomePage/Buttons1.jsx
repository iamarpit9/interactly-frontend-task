import React from "react";
import "../../assets/style.css";
import { Link } from "react-router-dom";

const Buttons1 = () => {
  return (
    <>
      <div className="btn-group">
        <Link to="campaign">
          <button className="btn">
            <span className="spanA">A</span>
            <span className="spanB">Campaign structure</span>
          </button>
        </Link>
        <Link to="facebook">
          <button className="btn">
            <span className="spanA">B</span>
            <span className="spanB">Learn Facebook basics</span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default Buttons1;
