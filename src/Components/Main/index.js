import React from "react";
import LandingPage from "../Main/Landing-Page";
import QuestionFeed from "../Main/Question-Feed";
import ResultFeed from "../Main/Result-Feed";
import FadeIn from "react-fade-in";

/*Functional Component that conditionally renders feed
    - LandingPage
    - QuestionFeed
    - ResultFeed
*/
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
        <FadeIn>
          <QuestionFeed
            question={props.question}
            handleNextButtonClick={props.handleNextButtonClick}
            getQuestion={props.getQuestion}
            current={props.current}
            handleSubmit={props.handleSubmit}
            checked={props.checked}
            onChange={props.onChange}
          ></QuestionFeed>
        </FadeIn>
      );
    } else if (props.display === "Results") {
      return (
        <FadeIn>
          <ResultFeed
            handleStartButtonClick={props.handleStartButtonClick}
            score={props.score}
            getScore={props.getScore}
          ></ResultFeed>
        </FadeIn>
      );
    } else {
      console.log("Failed to Load Feed");
      return "Failed to Load Feed";
    }
  }
  return getFeedType(props);
};

export default Main;
