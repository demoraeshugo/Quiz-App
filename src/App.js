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
      display: "Questions"
    };
  }

  render() {
    return (
      <div>
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
