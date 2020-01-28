import React, { Component } from "react";

class AnswerFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: 3
    };
  }

  onChange = i => {
    this.setState({
      checked: i
    });
    console.log(this.state.checked);
  };

  componentDidUpdate(prevProps) {
    if (this.props.choices !== prevProps.choices) {
      this.setState({
        checked: 3
      });
    }
  }

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
                  checked={this.state.checked === i ? true : false}
                  onChange={this.onChange.bind(this, i)}
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
