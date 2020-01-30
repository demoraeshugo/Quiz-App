import React from "react";
import StartButton from "../Landing-Page/Start-Button";
import FadeIn from "react-fade-in";
import '../../../Styles/Styles.scss'

//This Component renders the results of the users quiz
const LandingPage = props => {
  const { handleStartButtonClick } = props;
  return (
    <div id="LandingPage">
      <FadeIn>
        <h1>
          (<span>L</span>)lama
        </h1>
        <h1>
          (<span>S</span>)chool
        </h1>
        <h1>
          (<span>A</span>)dmissions
        </h1>
        <h1>
          (<span>T</span>)est
        </h1>
        <StartButton
          handleStartButtonClick={handleStartButtonClick}
        ></StartButton>
      </FadeIn>
    </div>
  );
};

export default LandingPage;
