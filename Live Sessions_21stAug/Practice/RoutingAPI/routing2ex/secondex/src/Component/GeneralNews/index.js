import React, { Component } from 'react'
import { fetchEverything } from '../../Apis/fetchEverything'
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


export default class GeneralNews extends Component {

    constructor(props){
            super(props)
            this.state = {
                headlines:null
            }

    }

    componentDidMount(){

            const getData = async () =>{

                    const data = await fetchEverything()
                    console.log(data)
                    this.setState({ headlines: data.articles })
            }
            getData()

    }

    render() {
        console.log(this.state.headlines)
        const news = this.state.headlines 
        return (
            <div>
                <h1> General News </h1>
                {news != null && news.length ? 
                    news.map((item,index)=>(
                        <div ClassName ='Cardstyle' key={index}>
                           <Card style={{ width: '18rem' }}>
                            <img src={item.urlToImage} alt="" />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                {item.description}.
                                </Card.Text>
                                <Button variant="primary">{item.publishedAt}</Button>
                            </Card.Body>
                            </Card>

                            {/* <h3>{item.title}</h3>
                            <img src={item.urlToImage} width={250} height={250} alt="" />
                            <p> {item.description} </p> */}
                        </div>
                    ))
                : <span> Loading... </span>}
            </div>
        )
    }
}
