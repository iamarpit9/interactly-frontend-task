import React, { useState } from "react";
import "../assets/style.css";
import Buttons2 from "./CampaignPage/Buttons2";
import Video2 from "./CampaignPage/Video2";
import Form from "../components/Form/Form";

const CampaignPage = () => {
  const [myBool, setmyBool] = useState(true);

  function toggleBool() {
    setmyBool(!myBool);
  }

  return (
    <>
      <div className="container">
        <Video2 />
        {
        myBool ?
         <Buttons2 toggleBool={toggleBool} />
          : 
          <Form />}
      </div>
    </>
  );
};

export default CampaignPage;
