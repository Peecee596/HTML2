import React from 'react'
import {useState,useEffect} from 'react'

export default function Hooksexample(){

    const [first_name,setData]=useState(null);

    useEffect( ()=>{
            setData('Poonam')
    },[])

    return(
        <div>
            {first_name}
        </div>
    )
}