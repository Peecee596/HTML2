import React, { Component } from "react";
import './index.css'
import {connect} from 'react-redux'
import loginUser from "../../actions/loginUserAction";
class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            username:"",
            password:"",
            loading:false
        }
    }
    onHandleInputChange=(e)=>{
      const name=e.target.name;
      const value=e.target.value;
      this.setState({
        [name]:value
      })
      console.log(this.state)
    }
    login=(e)=>{
      e.preventDefault()
      const username=this.state.username
      const password=this.state.password
      this.setState({
        loading:true
      })

      const user={
        username:username,
        password:password
      }
      this.props.loginUser(user)
      console.log(user)
    }

    render(){

      const button=this.state.loading==true
                      ?
        <button class='spinner'></button>
                      :
        <button onClick={this.login} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
                      
        return(
            <div id="login" class="w-full max-w-xs">
              <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Username
                  </label>
                  <input name="username"onChange={this.onHandleInputChange} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
                </div>
                <div class="mb-6">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password
                  </label>
                  <input name="password" onChange={this.onHandleInputChange}class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
                  <p class="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div class="flex items-center justify-between">
                    {button}
                </div>
              </form>
              <p class="text-center text-gray-500 text-xs">
                &copy;2020 Acme Corp. All rights reserved.
              </p>
            </div>

         )
    }
}
const MapStateToProps=(state)=>({
  data:state.data//loginreducer
})

const MapDispatchToProps={
  loginUser:loginUser//actions
}
export default connect(MapStateToProps,MapDispatchToProps)(Login);