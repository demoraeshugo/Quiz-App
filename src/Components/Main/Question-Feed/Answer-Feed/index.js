import React from "react";

const AnswerFeed = props => {
  function renderChoices(array) {
    return (
      <>
        {array.map((cur, i, arr) => {
            return (
              <div key={i}>
                <span><button>{i + 1}</button>{cur.content}</span>
              </div>
            );
          })
        }
      </>
    );
  }
  return renderChoices(props.choices)
};

export default AnswerFeed;
