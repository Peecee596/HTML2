import axios from "axios";
import React, { Component } from "react";
import Navigation from "../Navigation";
import './index.css'

export default class CreateUser extends Component{
    state={
        user:''
    }

    handleInputChange=(e)=>{
        const user=e.target.value;
        this.setState({
            user:user
        })
    }

    saveUser=(e)=>{
        e.preventDefault();
        const name=this.state.user;
        axios.post('http://localhost:3004/users',{name})
        .then(res=>{
            console.log(res.data);
            setTimeout(()=>{
                window.location.replace('/');
            },500)
        })
    }


    render(){
        
        return(
            <div>
             
                <h1>Enter the details</h1>
                <input className='inputbox'
                    name='name'
                    onChange={this.handleInputChange}
                    type='text'
                    placeholder='Enter the username'required
                />
                <button className='button3' onClick={this.saveUser}>Submit</button>
                
            </div>
        )
    }
}