import axios from "axios";

let data=null;

export const getTechnologyNews=async()=>{
    await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=d065882e6e554c9b98d9ace2b05d7a4d')
    .then(res=>{
        console.log(res)
        data=res.data.articles
    })
    .catch(err=>{
        console.log(err)
    })
    return data
}