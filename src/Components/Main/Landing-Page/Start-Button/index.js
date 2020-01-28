import React from "react";

//This Component renders the start button on the landing page
const StartButton = (props) => {
    return (
       <div>
           <button onClick={props.handleStartButtonClick}>Start Quiz</button>
       </div>
    )
}

export default StartButton;