import React from "react";
import MainPage from "../MainPage";

export default function TeamMumbai(props){

    return(
        <div>
            <h3>Team:{props.props.team_name}</h3>
            <h3>Owner:{props.props.owner}</h3>
            <h4>Head Coach:{props.props.head_coach}</h4>
            <h4>Bowling Coach:{props.props.bowling_coach}</h4>
            <img 
                src={props.props.logo}
                alt=""
                width={250}
                height={250}
            />

        </div>
    )
}