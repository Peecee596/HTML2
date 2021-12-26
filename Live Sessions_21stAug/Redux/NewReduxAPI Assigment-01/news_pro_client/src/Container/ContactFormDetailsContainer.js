
import React from 'react'
import { ContactFormDetails } from '../Components/ContactFormDetails'

export function ContactFormDetailsContainer(props){
    console.log(props)
    const data={
        name:props.location.props.name,
        email:props.location.props.email,
        subject:props.location.props.subject,
        message:props.location.props.message
    }
    return(
        <div>
            <ContactFormDetails data={data}/>
        </div>
    )
}