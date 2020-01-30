import React, { Component } from "react";
import AnswerFeed from "../Question-Feed/Answer-Feed";
import "../../../Styles/Styles.scss";

/*
Class based component, each question and it's answers
     - Question Number
     - Question Content
     - Question Choices
        - Choice X 
            - Radio X
            - Choice X Text
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
    const { handleSubmit, checked, onChange } = this.props;
    const { question, choices } = this.props.question;

    return (
      <div>
        <div>
          <h4>Question {questionNum} of 5</h4>
          <h3>{question}</h3>
        </div>
        <AnswerFeed
          choices={choices}
          handleSubmit={handleSubmit}
          checked={checked}
          onChange={onChange}
        ></AnswerFeed>
      </div>
    );
  }
}

export default QuestionFeed;
