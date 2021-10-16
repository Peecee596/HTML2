let url = `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=398a122378434b528b1bb97dd9b712cb`
let TechNews=null;
export const TechnicalNewsHeadlines=async()=>{
    await fetch(url)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        TechNews=data;
    })
    return TechNews;
}