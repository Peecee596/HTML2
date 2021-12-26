let url_old=' https://newsapi.org/v2/everything?q=bitcoin&apiKey=d065882e6e554c9b98d9ace2b05d7a4d';
let headlines=null;

export const fetchEverything =async()=>{
    await fetch(url_old)
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        headlines=data
    }).catch(error=>{console.log(error)})
    return headlines;
}