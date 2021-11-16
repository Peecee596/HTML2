import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setHeadlines } from "../../Action/setHeadlines";
import { getHeadlines } from "../../Apis/getHeadlines";
import { useHistory } from "react-router";
import './index.css';
import { getBusinessNews } from "../../Apis/getBusinessNews";
import { setBusinessNews } from "../../Action/setBusinessNews";
import { setTechnologyNews } from "../../Action/setTechnologyNews";
import { getTechnologyNews } from "../../Apis/getTechnologyNews";

export default function AppLoader(){
    let history=useHistory()

    const [loading,setLoading]=useState(false)

    const dispatch=useDispatch();
    useEffect(()=>{
        const getData=async()=>{
            const n1=await getHeadlines()
            console.log(n1)
            setHeadlines(dispatch,n1)

            const n2=await getBusinessNews()
            console.log(n2)
            setBusinessNews(dispatch,n2)

            const n3=await getTechnologyNews()
            console.log(n3)
            setTechnologyNews(dispatch,n3)

            setLoading(true)
        }
        getData()
    },[dispatch])

    const button=loading?
    <button type="button" class="btn btn-success buttondown" onClick={()=>history.push({
        pathname:'/headlines'
    })}>
        Click Here to Continue!!!</button>
    :
    <button type="button" class="btn btn-warning buttondown">Please Wait...Your Application is Loading....</button>
return(
    <div className='bgimage'>
        {/* <div class="alert alert-success" role="alert">
        <h3>Please Wait...</h3>
        </div>
        <div class="alert alert-warning" role="alert">
            <h4>Your Application is Loading....</h4>
        </div> */}
        {button}
    </div>
)
}