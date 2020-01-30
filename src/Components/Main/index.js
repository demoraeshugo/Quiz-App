import React from "react";
import LandingPage from "../Main/Landing-Page";
import QuestionFeed from "../Main/Question-Feed";
import ResultFeed from "../Main/Result-Feed";
import FadeIn from "react-fade-in";
import "../../Styles/Styles.scss";

/*Functional Component that conditionally renders feed
    - LandingPage
    - QuestionFeed
    - ResultFeed
*/
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
        <div id="questionFeed">
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
        </div>
      );
    } else if (props.display === "Results") {
      return (
        <ResultFeed
          handleStartButtonClick={props.handleStartButtonClick}
          score={props.score}
          getScore={props.getScore}
        ></ResultFeed>
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
