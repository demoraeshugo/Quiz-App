import React, { Component } from "react";

class AnswerFeed extends Component {
  renderChoices(array) {
    const { handleSubmit, checked, onChange } = this.props;
    return (
      <>
        <form onSubmit={e => handleSubmit(e)}>
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
