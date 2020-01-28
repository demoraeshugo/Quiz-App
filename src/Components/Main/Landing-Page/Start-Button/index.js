import React from "react";

//This Component renders the start button on the landing page
const StartButton = props => {
  const { handleStartButtonClick } = props;
  return (
    <div>
      <button onClick={handleStartButtonClick}>Start</button>
    </div>
  );
};

export default StartButton;
