import React, { Component } from "react";
import questions from "../src/questions.json";

class App extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      questions: questions
    }; 
  } 

  render() {

    return (
      //<Header/>
      //<Main/>
      //Footer/>
    )
  }
}

export default App;
