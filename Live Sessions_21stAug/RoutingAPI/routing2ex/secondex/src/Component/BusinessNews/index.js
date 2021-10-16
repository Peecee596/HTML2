import React,{Component}from "react";
import { BusinessNewsHeadlines } from "../../Apis/BusinessNewsHeadlines";


class BusinessNews extends Component{
    constructor(props){
        super(props)
        this.state={
            busheadlines:null
        }
    }
componentDidMount(){
    const getData=async()=>{
        const data=await BusinessNewsHeadlines();
        console.log(data)
        this.setState({busheadlines:data.articles})
    }
    getData();
}
render(){
    console.log(this.state.busheadlines)
    const news=this.state.busheadlines
    return(
        <div>
            <h1>Business News</h1>
            {news!==null && news.length?
                news.map((item,index)=>(
                    <div key ={index}>
                        <h3>{item.title}</h3>
                        <img src={item.urlToImage}alt=''/>
                        <p>{item.description}</p>
                    </div>
                ))
                :<span>Loading</span>
            }
        </div>
    )
}

}
export default BusinessNews;