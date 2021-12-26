let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=398a122378434b528b1bb97dd9b712cb`

let busheadlines=null;


export const BusinessNewsHeadlines = async()=>{
    await fetch(url)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        busheadlines=data;
    })
    return busheadlines;

}