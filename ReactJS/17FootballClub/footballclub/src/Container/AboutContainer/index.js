import React from "react";

export default function AboutContainer(props)
{
    const renderInformation=()=>{
        console.log(props)
    }

    return(
        <div>
            <h1>Poonam Chauahn </h1>
            {renderInformation()}
            <h4>{props.match.params.aboutinfo}</h4>
        </div>
    )
}