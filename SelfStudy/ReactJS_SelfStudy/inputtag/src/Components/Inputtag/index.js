import react,{Component} from 'react'

export default class Inputtag extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            username:" ",
            secondname:" ",
            result:" "
        }
    }
    handleInputChange=(event)=>{
        this.setState({
            username:event.target.value,
            secondname:event.target.value
        })
    }

    onsubmitbutton=(event)=>{
        const result1=this.state.username +this.state.secondname

        this.setState({
            
            result:result1
        })
    }
 

    render()
    {
        return(
            <div>
                <label>UserName: </label>
                <input 
                    name='fname'
                    type='text'
                    value={this.state.username}
                    onChange={this.handleInputChange}
                />
                <label>SecondName: </label>
                <input 
                    name='sname'
                    type='text'
                    value={this.state.secondname}
                    onChange={this.handleInputChange}
                />


                <button type='submit'
                        onClick={this.onsubmitbutton}
                >Submit</button>
                        
                <h4>{this.state.username}{this.state.secondname}</h4>
                <h4>{this.state.result}</h4>


            </div>
        )
    }
}
