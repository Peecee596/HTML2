import React from "react";
import { Link } from "react-router-dom";
export default function About(props){
    const renderInformation=()=>{
        return props.information.map((information)=>
        (
            <li>
                <Link to ={'/information'+'/'+information.id+'/'+information.dataenetered+'/'+information.name+'/'+information.aboutinfo}>
                    
                    {information.dataenetered}
                </Link>
            </li>
        ))
    }
return(
    
    <div>
        <h1>Information Details</h1>
        <br/>
        <ul>
            {renderInformation()}
        </ul>
    </div>
)
}