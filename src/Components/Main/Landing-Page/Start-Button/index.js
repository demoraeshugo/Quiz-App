import React from "react";
import '../../../../Styles/Styles.scss';

//This Component renders the start button on the landing page
const StartButton = props => {
  const { handleStartButtonClick } = props;
  return (
    <div>
      <button id="StartButton" onClick={handleStartButtonClick}><h2>Start</h2></button>
    </div>
  );
};

export default StartButton;
