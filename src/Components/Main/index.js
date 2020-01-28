import React, { Component } from "react";
import QuestionFeed from "../Main/Question-Feed";
import ResultFeed from "../Main/Result-Feed";

const Main = props => {
    function getFeedType(){
        var feed;
        if(props.display === "Questions") {
            feed = <QuestionFeed></QuestionFeed>
        } else if (props.display === "Results") {
            feed = <ResultFeed></ResultFeed>
        }
        return feed;
    }

    return (
       getFeedType()
    )
}

export default Main;