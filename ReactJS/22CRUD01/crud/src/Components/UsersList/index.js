import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navigation from '../Navigation'
import './index.css'

export default class UsersList extends Component{

    state={
        users:[]
    }

    componentDidMount(){
        axios.get('http://localhost:3004/users')
        .then(res=>{
            console.log(res.data);
            this.setState({
                users:res.data
            })
            console.log(this.state.users)
        })        
    }
    
    deleteUser=(e)=>{
        e.preventDefault();
        const target=e.target;
        const id=target.id;
        axios.delete('http://localhost:3004/users/'+id)
        .then(res=>{
            console.log(res.data);
            setTimeout(()=>{
                window.location.reload('/');
            },500)
        })
    }
    render(){
               return(
            <div>
               
                <h2>List Of Users</h2>
                {
                    this.state.users.map((users)=>(
                        <div className='datainput'>
                            <li className='username' key='' id={users.id}>{users.name}</li>
                            <Link  className='button1' to={'/edituser'+'/'+ users.id+'/'+ users.name}>Edit</Link>
                            {/* <button>Edit</button> */}
                            <button className='button' id={users.id} onClick={this.deleteUser}>Delete</button>
                        </div>
                    )


                    )
                }
            </div>
        )
    }
}