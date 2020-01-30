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
        <FadeIn>
          <LandingPage
            handleStartButtonClick={props.handleStartButtonClick}
          ></LandingPage>
        </FadeIn>
      );
    } else if (props.display === "Questions") {
      return (
        <div id="questionFeed">
          <FadeIn>
            <QuestionPage
              question={props.question}
              handleNextButtonClick={props.handleNextButtonClick}
              getQuestion={props.getQuestion}
              current={props.current}
              handleSubmit={props.handleSubmit}
              checked={props.checked}
              onChange={props.onChange}
            ></QuestionPage>
          </FadeIn>
        </div>
      );
    } else if (props.display === "Results") {
      return (
        <FadeIn>
          <ResultPage
            handleStartButtonClick={props.handleStartButtonClick}
            score={props.score}
            getScore={props.getScore}
            handleAboutButtonClick={props.handleAboutButtonClick}
          ></ResultPage>
        </FadeIn>
      );
    } else if (props.display === "About") {
      return (
        <FadeIn>
          <AboutPage
            handleAboutButtonClick={props.handleAboutButtonClick}
          ></AboutPage>
        </FadeIn>
      );
    } else {
      console.log("Failed to Load Feed");
      return "Failed to Load Feed";
    }
  }
  return <div id="Feed">{getFeedType(props)}</div>;
};

export default Main;
