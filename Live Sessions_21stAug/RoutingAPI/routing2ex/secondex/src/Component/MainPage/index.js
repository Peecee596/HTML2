import React from "react";
import { Link } from 'react-router-dom'
import './index.css'
function MainPage(){
    return(
        <div className='header'>
            <h1>Welcome to React App - 10th Oct 2021 </h1>
            <ul>
                <li><Link to ='/' className='Link'>Home</Link></li>
                <li><Link to ='/dashboard' className='Link'>Dashboard</Link></li>
                <li><Link to ='/news/business'className='Link'>Business News</Link></li>
                <li><Link to ='/news/tech'className='Link'>Technology News</Link></li>
                <li><Link to ='/news/sports'className='Link'>Sports News</Link></li>
                <li><Link to ='/ipl-teams-2021' className='Link'>IPL 2021</Link></li>
            </ul>
        </div>
    )
}
export default MainPage;