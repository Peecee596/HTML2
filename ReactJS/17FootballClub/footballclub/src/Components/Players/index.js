import React from 'react'
import './index.css'
import{ Link } from 'react-router-dom'
export default function Players(props){
    const renderPlayers=()=>{
        return props.players.map((player)=>(
        <li><Link to ={"/players" +"/" +player.id +"/" +player.name +"/" +player.image}>{player.name}</Link></li>
        
        ))
    }
    return(
       <div>
            <h1>Our Top Players</h1>
            <ul className='playerslist'>
                {renderPlayers()}
            </ul>
       </div>
    );
}