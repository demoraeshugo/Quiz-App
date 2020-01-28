import React, { Component } from "react";

class AnswerFeed extends Component {
  renderChoices(array) {
    return (
      <>
        <form onSubmit={e => this.props.handleSubmit(e)}>
          {array.map((cur, i, arr) => {
            return (
              <label key={i}>
                <input
                  type="radio"
                  key={"input" + i}
                  checked={this.props.checked === i ? true : false}
                  onChange={this.props.onChange.bind(this, i)}
                ></input>
                {cur.content}
              </label>
            );
          })}
          <input type="submit"></input>
        </form>
      </>
    );
  }

  render() {
    return this.renderChoices(this.props.choices);
  }
}

export default AnswerFeed;
