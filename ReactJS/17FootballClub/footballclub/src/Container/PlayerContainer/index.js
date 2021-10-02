import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
export default function PlayerContainer(props)
{
    // const renderPlayer=()=>{
    //     console.log(props)
    // }

    return(
        <div>
            <h4><Link to='/players'>Back</Link></h4>
            <h1>Player Details</h1>
            {/* {renderPlayer()} */}

            <h4>{props.match.params.name}</h4>
            <img src={require('../../assets/images/'+props.match.params.image).default}></img>
        </div>
    )
}