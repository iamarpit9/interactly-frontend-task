import React, {useState} from 'react'
import "../assets/style.css";
import Buttons3 from './FacebookBasics/Buttons3';
import Video3 from './FacebookBasics/Video3';
import Form from "../components/Form/Form"


const FacebookBasicsPage = () => {

    const [myBool, setmyBool] = useState(true);

    function toggleBool() {
      setmyBool(!myBool);
    }

  return (
    <>
<div className="container">
  <Video3/>
  {
myBool ?
  <Buttons3 toggleBool={toggleBool}/>
  :
  <Form/>
  }
</div>
    </>
  )
}

export default FacebookBasicsPage;