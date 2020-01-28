import React, { Component } from "react";
import questions from "../src/questions.json";
import Main from "../src/Components/Main";
import Footer from "../src/Components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: questions,
      score: 0,
      display: "LandingPage"
    };
  }

  handleStartButtonClick = () => {
    console.log("Button Clicked")
    this.setState({
      display: "Questions"
    });
  };

  render() {
    const { display } = this.state;
    const { handleStartButtonClick } = this

    return (
      <div>
        <Main
          display={display}
          handleStartButtonClick={handleStartButtonClick}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
