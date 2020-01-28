import React from "react";
import StartButton from "../Landing-Page/Start-Button";
import FadeIn from "react-fade-in";

//This Component renders the results of the users quiz
const LandingPage = props => {
  const { handleStartButtonClick } = props;
  return (
    <div id="LandingPage">
      <FadeIn>
        <p>Test you Llama Know-How</p>
        <p>Click the button below to start the quiz</p>
        <StartButton
          handleStartButtonClick={handleStartButtonClick}
        ></StartButton>
      </FadeIn>
    </div>
  );
};

export default LandingPage;
