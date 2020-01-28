import React from "react";
import StartButton from "../Landing-Page/Start-Button";

//This Component renders the results of the users quiz
const LandingPage = (props) => {
    return (
       <div>
           <p>Test you Llama Know-How</p>
           <p>Click the button below to start the quiz</p>
           <StartButton handleStartButtonClick={props.handleStartButtonClick}></StartButton>
       </div>
    )
}

export default LandingPage;