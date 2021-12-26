import React from "react";
import MainPage from "../Component/MainPage";
import TeamDetails from "../Component/TeamDetails";

export default function TeamDetailsContainer(props){
    console.log(props)
    const data={
        team_name:props.location.props.team_name,
        owner:props.location.props.owner,
        head_coach:props.location.props.head_coach,
        bowling_coach:props.location.props.bowling_coach,
        logo:props.location.props.logo

    }
    return(
        <div>
            <MainPage/>
            <TeamDetails props={data}/>
           
        </div>
    )
}