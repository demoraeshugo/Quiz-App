import React, { Component } from "react";
import NextButton from "../Question-Feed/Next-Button";

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

    /*
 getCurrentQuestion(props) {
    const questionNum = props.current + 1;
    const content = props.question.question;
    return (
      <>
        <div>
          <p>Question {questionNum} of 5</p>
          <p>{content}</p>
        </div>
        <NextButton handleNextButtonClick={props.handleNextButtonClick}></NextButton>
      </>
    );
  }
  */R
  render() {
    const questionNum = this.props.current + 1;
    const content = this.props.question.question;
      return ( <>
      <div>
        <p>Question {questionNum} of 5</p>
        <p>{content}</p>
      </div>
      <NextButton handleNextButtonClick={this.props.handleNextButtonClick}></NextButton>
    </>
      )
  }
};

export default QuestionFeed;
