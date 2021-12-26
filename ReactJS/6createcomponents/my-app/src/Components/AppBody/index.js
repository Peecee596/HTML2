import React,{Component} from 'react'
import './index.css'
class AppBody extends Component{
    constructor(props){
        super(props)
        this.state={
            firstname:'Poonam',
            lastname:'Chauhan',
            username:'',
            mobileno:'',
            result:''
        }
    }
    handleInputChange=(e)=>{
        const target=e.target;
        const name=target.name;
        const value=target.value

        this.setState({
            [name]:value
        })
    }

    submit=(e)=>{
        const result=parseInt(this.state.username)+parseInt(this.state.mobileno)
        this.setState({
            result:result
        })
    }
    render(){
        return(
            <div className='Appbody'>
                <label>Login Page</label>
                <p className='para'>This is App Body<br/>My FirstName is {this.state.firstname} and LastName is {this.state.lastname}</p>
                <input name='username' className='input'type='text' onChange={this.handleInputChange} value={this.state.username} placeholder='Enter Firstname'/>
                <br/>
                <input name='mobileno' type='text' className='input' onChange={this.handleInputChange} value={this.state.mobileno} placeholder='Enter Contact Number'/>
                <br/><br/>
                <button className='submit'onClick={this.submit}>SignUp</button>
                <br/>
                <h4 className='para'>Output:{this.state.username}{this.state.mobileno}<br/>Sum:{this.state.result}</h4>
                
            </div>
        );
    }
}
export default AppBody;