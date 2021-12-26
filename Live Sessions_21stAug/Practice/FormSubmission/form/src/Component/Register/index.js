import React, { Component } from 'react'
import "./index.css"

class Register extends Component{


    constructor(props){
        super(props)
        this.state={
            first_name:null,
            last_name:null,
            email:null,
            contact:null
        }
    }

       handleInputChange=(e)=>{
        e.preventDefault();
        console.log(e);
        const target=e.target;
        const name=target.name;
        const value=target.value;
        //console.log(name,value);
        //console.log(value);

        if(name==='first_name'){
            this.setState({first_name:value})
        }
        if(name==='last_name'){
            this.setState({last_name:value})
        }
        if(name==='email'){
            this.setState({email:value})
        }
        if(name==='contact'){
            this.setState({contact:value})
        }

       
    }

    SubmitData=()=>{
            const formData={
                name:this.state.first_name+""+this.state.last_name,
                email:this.state.email,
                contact:this.state.contact
            }
            //alert(formData);

    }
    render(){
        console.log(this.state)
        return(

            <div>
                <h1>Enter the correct details to get the offer</h1>
                <form onSubmit={this.SubmitData}>
                    <input
                        name="first_name"
                        type="text"
                        placeholder="Enter First Name"
                        onChangeCapture={this.handleInputChange}
                        
                        
                    />
                    <input
                        type="text"
                        placeholder="Enter Last Name"
                        onChangeCapture={this.handleInputChange}
                        name="last_name"
                    />
                    <input
                        type="email"
                        placeholder="Enter Email Address"
                        onChangeCapture={this.handleInputChange}
                        name="email"
                    />
                    <input
                        type="number"
                        placeholder="Enter the Phone No."
                        onChangeCapture={this.handleInputChange}
                        name="contact"
                    />
                    <button type='submit'>Submit</button>
                </form>
                
            </div>
        )
    }
}
export default Register;