
import React from "react";
import { useHistory } from "react-router-dom";
import './index.css';

export function ContactFormDetails(props){
    

    const name=props.data.name;
    const email=props.data.email;
    const subject=props.data.subject;
    const message=props.data.message;

    let history=useHistory()

    const goBack = ()=>{
        // window.location.replace('/headlines')
        // history.goBack()
        history.push("/headlines");
    }
    return(
        <div>
            <div class="card text-center btn btn-warning">
                <div class="card-header">
                Your message has been sent. Thank you!
                
                </div>
                <div class="card-body">
                    <h5 class="card-title btn btn-info">Following Details have been entered</h5><br/>
                  
                       <p class="card-text btn btn-success" style={{width:'500px'}}>
                                    Name:{name}<br/>
                                    Email:{email}<br/>
                                    Concern/Enquiry:{subject}<br/>
                                    Description:{message}
                        </p>
                    
                    <br/>

                    <button class="btn btn-primary" onClick={()=>goBack()}>Go Back</button>

                </div>
                <div class="card-footer text-muted">
                Your Enquiry/Concern is under review
                </div>
                
            </div>


            

        </div>
    )
}