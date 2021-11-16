import React from "react";
import MainPage from "../Component/MainPage";
import TeamMumbai from "../Component/TeamMumbai";


function TeamMumbaiContainer(props){
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
            <TeamMumbai props={data}/>
           
        </div>
    )
}
export default TeamMumbaiContainer;