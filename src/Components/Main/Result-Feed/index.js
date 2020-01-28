import React, { Component } from "react";
import '../../../Styles/Styles.scss';

//This Component renders the results of the users quiz
class ResultFeed extends Component {
  componentDidMount() {
    this.props.getScore();
  }
  componentDidUpdate(prevProps) {
    if (this.props.score !== prevProps.score) {
      this.props.getScore();
    }
  }
  render() {
    return (
      <div>
        <p>Inside Result Feed Component</p>
        <p> Your Score was: {this.props.score}</p>
        <button onClick={this.props.handleStartButtonClick}>Start Over</button>
      </div>
    );
  }
}

export default ResultFeed;
