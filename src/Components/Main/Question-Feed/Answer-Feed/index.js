import React, { Component } from "react";
import FadeIn from "react-fade-in";

class AnswerFeed extends Component {
  renderChoices(array) {
    const { handleSubmit, checked, onChange } = this.props;
    return (
      <>
        <form onSubmit={e => handleSubmit(e)}>
          <FadeIn>
            {array.map((cur, i, arr) => {
              return (
                <label key={i}>
                  <input
                    type="radio"
                    checked={checked === i ? true : false}
                    onChange={onChange.bind(this, i)}
                  ></input>
                  {cur.content}
                </label>
              );
            })}
            <input id="submitButton" type="submit"></input>
          </FadeIn>
        </form>
      </>
    );
  }

  render() {
    return this.renderChoices(this.props.choices);
  }
}

export default AnswerFeed;
