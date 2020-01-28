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
      display: "Results"
    };
  }

  render() {
    const { display } = this.state

    return (
      <div>
        <Main display = {display}/>
        <Footer />
      </div>
    );
  }
}

export default App;
