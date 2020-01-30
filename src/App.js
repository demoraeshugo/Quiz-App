import React, { Component } from "react";
import questionJSON from "../src/Assets/questions.json";
import Main from "../src/Components/Main";
import "../src/Styles/Styles.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      score: 0,
      display: "LandingPage",
      current: 0,
      checked: 3
    };
  }

  answers = [];

  handleStartButtonClick = () => {
    this.setState({
      current: 0,
      score: 0,
      display: "Questions"
    });
    this.answers = [];
  };

  handleAboutButtonClick = () => {
    this.setState({
      display: "About"
    });
  };

  getQuestion = () => {
    this.setState({
      question: questionJSON.questions[this.state.current]
    });
  };

  onChange = i => {
    this.setState({
      checked: i
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.answers.push(this.state.checked);
    if (this.state.current < 4) {
      this.setState({
        current: this.state.current + 1,
        checked: 3
      });
    } else {
      this.setState({
        display: "Results"
      });
    }
  };

  getScore = () => {
    var score = 0;
    for (let i = 0; i < questionJSON.questions.length; i++) {
      if (this.answers[i] === parseInt(questionJSON.questions[i].answer)) {
        score += 20;
      }
    }
    this.setState({
      score: score
    });
  };

  componentDidMount() {
    this.getQuestion();
  }

  render() {
    const { display, current, question, score, checked, } = this.state;
    const {
      handleStartButtonClick,
      getQuestion,
      getScore,
      handleSubmit,
      onChange,
      handleAboutButtonClick,
    } = this;

    return (
      <div className="wrapper">
        <Main
          display={display}
          current={current}
          handleStartButtonClick={handleStartButtonClick}
          question={question}
          getQuestion={getQuestion}
          getScore={getScore}
          score={score}
          handleSubmit={handleSubmit}
          checked={checked}
          onChange={onChange}
          handleAboutButtonClick={handleAboutButtonClick}
        />
      </div>
    );
  }
}

export default App;

//<Bottom />