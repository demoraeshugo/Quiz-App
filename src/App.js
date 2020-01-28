import React, { Component } from "react";
import jsonData from "../src/questions.json";
import Main from "../src/Components/Main";
import Footer from "../src/Components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      score: 0,
      display: "LandingPage",
      current: 0
    };
  }

  handleStartButtonClick = () => {
    this.setState({
      current: 0,
      display: "Questions"
    });
  };

  handleNextButtonClick = () => {
    if(this.state.current < 4) {
      this.setState({
        current: (this.state.current + 1)
      })
    } else {
      this.setState({
        display: "Results"
      })
    }
  }

  getQuestion = () => {
    this.setState({
      question: jsonData.questions[this.state.current]
    })
    console.log(this.state)
  }

  answers = [0,0,0,0,0]

  getScore = () => {
    var score = 0;
    for(let i = 0; i < jsonData.questions.length; i++) {
      if(this.answers[i] === parseInt(jsonData.questions[i].answer)) {
        score+=10;
      }
    }
    this.setState({
      score: score
    })
  }

  handleSubmit = (event) => {
    console.log(event.target)
    event.preventDefault()
  }

  componentDidMount() {
    this.getQuestion();
  }

  render() {
    const { display, current, question, score } = this.state;
    const { handleStartButtonClick, handleNextButtonClick, getQuestion, getScore, handleSubmit} = this

    return (
      <div>
        <Main
          display={display}
          current={current}
          handleStartButtonClick={handleStartButtonClick}
          handleNextButtonClick={handleNextButtonClick}
          question={question}
          getQuestion={getQuestion}
          getScore={getScore}
          score={score}
          handleSubmit={handleSubmit}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
