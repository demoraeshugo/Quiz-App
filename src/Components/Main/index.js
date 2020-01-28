import React, { Component } from "react";
import LandingPage from "../Main/Landing-Page";
import QuestionFeed from "../Main/Question-Feed";
import ResultFeed from "../Main/Result-Feed";

/*Functional Component that conditionally renders feed
    - LandingPage
    - QuizFeed
    - ResultFeed
*/
const Main = (props) => {
  function getFeedType(props) {
    if (props.display === "LandingPage") {
      return (
        <LandingPage
          handleStartButtonClick={props.handleStartButtonClick}
        ></LandingPage>
      );
    } else if (props.display === "Questions") {
      return <QuestionFeed></QuestionFeed>;
    } else if (props.display === "Results") {
      return <ResultFeed></ResultFeed>;
    } else {
      console.log("Failed to Load Feed");
      return "Failed to Load Feed";
    }
  }
    return getFeedType(props);
}

export default Main;
