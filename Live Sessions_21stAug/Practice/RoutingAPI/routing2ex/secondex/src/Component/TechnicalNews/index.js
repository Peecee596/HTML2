import React,{Component} from "react";
import { TechnicalNewsHeadlines } from "../../Apis/TechnicalNewsHeadlines";

class TechnicalNews extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            TechNews:null
        }
    }

    componentDidMount(){
        const getData =async()=>{
            const data=await TechnicalNewsHeadlines()
            console.log(data);
            this.setState({TechNews:data.articles})
        }
        getData()
    }
    render(){
        console.log(this.state.TechNews)
        const news=this.state.TechNews
        return(
            <div>
                <h1>Technology News</h1>
                {
                    news !==null && news.length?
                        news.map((item,index)=>(
                            <div key ={index}>
                                <h3>{item.title}</h3>
                                <img src={item.urlToImage}/>
                                <p>{item.description}</p>
                            </div>
                             ))
                    :<span>Loading</span>
                }
            </div>
        )
    }
}
export default TechnicalNews;