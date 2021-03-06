import React, { Component } from "react";
import Score from "./Score/index";
import "../../../Styles/Styles.scss";

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
      <div id="resultsPage">
        <Score score={this.props.score}></Score>
        <div className="buttonGroup">
          <button
            id="restartButton"
            onClick={this.props.handleStartButtonClick}
          >
            <h2>Restart</h2>
          </button>
          <button id="aboutButton" onClick={this.props.handleAboutButtonClick}>
            <h2>About</h2>
          </button>
        </div>
      </div>
    );
  }
}

export default ResultPage;

//<Score score={this.props.score} getScore={this.props.getScore}></Score>