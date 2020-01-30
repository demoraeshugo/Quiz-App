import React, { Component } from "react";
import '../../../Styles/Styles.scss';

//This Component renders the results of the users quiz
class ResultPage extends Component {
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
        <h3> Your Score was: {this.props.score}%</h3>
        <button onClick={this.props.handleStartButtonClick}><h2>Restart</h2></button>
        <button onClick={this.props.handleAboutButtonClick}><h2>About</h2></button>
      </div>
    );
  }
}

export default ResultPage;
