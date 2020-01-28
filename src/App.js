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
      current: 0,
      checked: 3
    };
  }

  handleStartButtonClick = () => {
    this.setState({
      current: 0,
      display: "Questions"
    });
  };

  getQuestion = () => {
    this.setState({
      question: jsonData.questions[this.state.current]
    })
    console.log(this.state)
  }


  onChange = i => {
    this.setState({
      checked: i
    });
  };

  answers = []

  getScore = () => {
    console.log(this.answers)
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

  handleSubmit = (e) => {
    e.preventDefault()
    this.answers.push(this.state.checked)
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

  componentDidMount() {
    this.getQuestion();
  }

  render() {
    const { display, current, question, score, checked } = this.state;
    const { handleStartButtonClick, getQuestion, getScore, handleSubmit, onChange} = this

    return (
      <div>
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
        />
        <Footer />
      </div>
    );
  }
}

export default App;
