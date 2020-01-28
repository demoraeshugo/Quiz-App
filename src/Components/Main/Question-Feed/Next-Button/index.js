import React from "react";

//This Component renders the start button on the landing page
const NextButton = (props) => {
    return (
       <div>
           <button onClick={props.handleNextButtonClick}>Next</button>
       </div>
    )
}

export default NextButton;