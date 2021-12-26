import React,{Component} from "react";
import {Link} from 'react-router-dom'
export default class Navigation extends Component{
    render()
    {
        return(
            <div>
                <ul>
                    <li><Link to ='/'>Home</Link></li>
                    <li><Link to ='/about'>About</Link></li>
                    <li><Link to ='/contact'>Contact</Link></li>
                    <li><Link to ='/photos'>Photos</Link></li>
                </ul>
            </div>
        );
    }
}