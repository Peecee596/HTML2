import axios from 'axios';
import React, { Component } from 'react'
import { render } from 'react-dom'
import Navigation from '../Navigation';
import './index.css'

export default class EditUser extends Component{
    constructor(props){
        super(props);
        this.state={
            id:props.match.params.id,
            name:props.match.params.name
        }

    }

    handleInputChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        this.setState({
            name:value
        })

    }
    updateUser=(e)=>{
        e.preventDefault();
        const id=this.state.id;
        const name=this.state.name;
        axios.patch('http://localhost:3004/users/'+id,{name})
        .then(res=>{
            console.log(res.data)
            setTimeout(()=>{
                window.location.replace('/')
            },500)
        })
    }
    
    render(){
        return(
            <div>
               
                <h1>Edit User</h1>
                <input className='inputbox'
                    type='text'
                    value={this.state.id}
                    disabled
                />
                <input className='inputbox'
                    type='text'
                    value={this.state.name}
                    onChange={this.handleInputChange}

                />

                <button  className='button' onClick={this.updateUser}>Submit</button>

            </div>
        )
    }
}