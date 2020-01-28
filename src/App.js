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

  componentDidMount() {
    this.getQuestion();
  }

  render() {
    const { display, current, question } = this.state;
    const { handleStartButtonClick, handleNextButtonClick, getQuestion } = this

    return (
      <div>
        <Main
          display={display}
          current={current}
          handleStartButtonClick={handleStartButtonClick}
          handleNextButtonClick={handleNextButtonClick}
          question={question}
          getQuestion={getQuestion}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
