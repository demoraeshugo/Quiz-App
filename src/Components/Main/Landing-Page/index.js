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
        <p>
          (<span>L</span>)lama
        </p>
        <p>
          (<span>S</span>)chool
        </p>
        <p>
          (<span>A</span>)dmissions
        </p>
        <p>
          (<span>T</span>)est
        </p>
        <StartButton
          handleStartButtonClick={handleStartButtonClick}
        ></StartButton>
      </FadeIn>
    </div>
  );
};

export default LandingPage;
