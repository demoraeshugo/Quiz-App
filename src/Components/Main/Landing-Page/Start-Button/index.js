import React from "react";
import "../../../../Styles.css"

//This Component renders the start button on the landing page
const StartButton = props => {
  const { handleStartButtonClick } = props;
  return (
    <div>
      <button id="StartButton" onClick={handleStartButtonClick}>Start</button>
    </div>
  );
};

export default StartButton;
