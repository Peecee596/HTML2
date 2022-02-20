import React from "react";
import { useSelector } from "react-redux";
import './index.css'

export default function BusinessHeadlines(){

    const data=useSelector((state)=>state.news.business_news)
    console.log(data);
    return(
        <div>
           
            <main id="main" className="down">
            <section id="cta" class="cta">
            <div class="container">    
                {data!=null && data.length?
                    data.map((item,index)=>(
                        <div key={index} class="card mb-3">
                            <img class="card-img-top" src={item.urlToImage} alt=""/>
                            <div class="card-body">                            
                                <h5 class="card-title">{item.title}</h5>
                                <p class="card-text" style={{color: "black"}}>{item.description}</p>
                                <p class="card-text"><small class="text-muted">{item.publishedAt}</small></p>
                            </div>
                        </div>
                    )

                    )
                :<span>Loading....</span>

                }
            </div>
            </section>
            </main>
        </div>
    )
}