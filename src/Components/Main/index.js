import React from "react";
import QuestionFeed from "../Main/Question-Feed";
import ResultFeed from "../Main/Result-Feed";

const Main = props => {
    function getFeedType(display){
        if(display === "Questions") {
            return <QuestionFeed></QuestionFeed>
        } else if (display === "Results") {
            return <ResultFeed></ResultFeed>
        } else {
            console.log("Failed to Load Feed")
            return "Failed to Load Feed"
        }
    }

    return (
       getFeedType(props.display)
    )
}

export default Main;