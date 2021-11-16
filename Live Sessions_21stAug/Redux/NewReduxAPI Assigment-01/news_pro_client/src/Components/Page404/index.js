import React from "react";
import { Link } from 'react-router-dom'
export default function Page404(){
    return(
        <div>
        <p>Page Not Found</p>
        <Link to ='/'>Go Back</Link>
        </div>
    )
}
