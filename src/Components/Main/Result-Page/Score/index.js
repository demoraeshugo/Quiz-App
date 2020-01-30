import React, { Component } from "react";
import FadeIn from "react-fade-in";
import "../../../../Styles/Styles.scss";
import { ReactComponent as Ellipse } from "../../../../Assets/Ellipse.svg";

class Score extends Component {
  render() {
    return (
      <div id="AboutPage">
        <FadeIn>
          <h3> Your Score was: </h3>
          <div id="score">
            <Ellipse></Ellipse>
            <h1>{this.props.score}%</h1>
          </div>
        </FadeIn>
      </div>
    );
  }
}

export default Score;

//<h1>{this.props.score}%</h1>

//  <Ellipse></Ellipse>

/* <div id="AboutPage">
        <FadeIn>
          <h3> Your Score was: </h3>
        </FadeIn>
      </div>

      */
