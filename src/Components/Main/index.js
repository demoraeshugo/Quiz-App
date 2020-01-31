import React from "react";
import LandingPage from "./Landing-Page/index";
import QuestionPage from "./Question-Page/index";
import ResultPage from "./Result-Page";
import AboutPage from "./About-Page/index";
import FadeIn from "react-fade-in";
import "../../Styles/Styles.scss";

const Main = props => {
  function getFeedType(props) {
    if (props.display === "LandingPage") {
      return (
          <LandingPage
            handleStartButtonClick={props.handleStartButtonClick}
          ></LandingPage>
      );
    } else if (props.display === "Questions") {
      return (
          <QuestionPage
            question={props.question}
            handleNextButtonClick={props.handleNextButtonClick}
            getQuestion={props.getQuestion}
            current={props.current}
            handleSubmit={props.handleSubmit}
            checked={props.checked}
            onChange={props.onChange}
          ></QuestionPage>
      );
    } else if (props.display === "Results") {
      return (
        <ResultPage
          handleStartButtonClick={props.handleStartButtonClick}
          score={props.score}
          getScore={props.getScore}
          handleAboutButtonClick={props.handleAboutButtonClick}
        ></ResultPage>
      );
    } else if (props.display === "About") {
      return (
        <AboutPage
          handleAboutButtonClick={props.handleAboutButtonClick}
        ></AboutPage>
      );
    } else {
      console.log("Failed to Load Feed");
      return "Failed to Load Feed";
    }
  }
  return (
    <div id="Feed">
      <FadeIn>{getFeedType(props)}</FadeIn>
    </div>
  );
};

export default Main;
