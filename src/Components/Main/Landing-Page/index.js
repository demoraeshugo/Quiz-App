import React from "react";
import StartButton from "../Landing-Page/Start-Button";

//This Component renders the results of the users quiz
const LandingPage = (props) => {
    return (
       <div>
           <span>Here is some text about the Landing Page</span>
           <StartButton handleStartButtonClick={props.handleStartButtonClick}></StartButton>
       </div>
    )
}

export default LandingPage;