import React, { Component } from "react";
import NextButton from "../Question-Feed/Next-Button";
import AnswerFeed from "../Question-Feed/Answer-Feed";

/*This components renders quiz 
     - Question Number
     - Question Content
     - Question Choices
        - Choice X 
            - Button
            - Choice X Content
    - Next Button
*/

class QuestionFeed extends Component {
  componentDidMount() {
    this.props.getQuestion();
  }

  componentDidUpdate(prevProps) {
    if (this.props.current !== prevProps.current) {
      this.props.getQuestion();
    }
  }

  render() {
    const questionNum = this.props.current + 1;
    const content = this.props.question.question;
    const choices = this.props.question.choices
    return (
      <>
        <div>
          <p>Question {questionNum} of 5</p>
          <p>{content}</p>
        </div>
        <AnswerFeed choices={choices}></AnswerFeed>
    
        <NextButton
          handleNextButtonClick={this.props.handleNextButtonClick}
        ></NextButton>
      </>
    );
  }
}



export default QuestionFeed;
