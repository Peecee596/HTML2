let url='https://newsapi.org/v2/everything?q=bitcoin&apiKey=d065882e6e554c9b98d9ace2b05d7a4d';
let headlines =null;
export const fetcheverything =async()=>{
    await fetch(url)
    .then(response=>response.json())
    .then(data=>{
        // console.log(data)
        // console.log(data.articles)
        headlines=data.articles
    })
    return headlines;
}