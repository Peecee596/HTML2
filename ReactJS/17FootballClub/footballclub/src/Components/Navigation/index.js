import React from "react";
import About from "../About";
import Contact from "../Contact";
import Players from "../Players";
import './index.css'
import {Link} from 'react-router-dom'
export default function Navigation(){
    return(
        <div>
            
            <ul className='header1'>
                <li className='subheading'><Link className ='link' to ='/'>Home</Link></li>
                <li className='subheading'><Link className ='link' to='/about'>About</Link></li>
                <li className='subheading'><Link className ='link' to='/contact'>Contact</Link></li>
                <li className='subheading'><Link className ='link' to='/players'>Players</Link></li>
              
            </ul>
        </div>
    );

}