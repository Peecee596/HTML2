import React from "react";
import { Link } from 'react-router-dom'
import './index.css'

function Navigation(){
    return(
        <div class='mainnavbar'>
            <ul className ='navbar'>
                <li><Link to='/'className='nav'>All Users</Link></li>
                <li><Link to ='/createuser'className='nav'>Create User</Link></li>
            </ul>
        </div>
    )
}
export default Navigation;