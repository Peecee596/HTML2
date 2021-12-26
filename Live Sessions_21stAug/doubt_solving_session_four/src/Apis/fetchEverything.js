let url_old = `https://newsapi.org/v2/top-headlines?country=in&apiKey=398a122378434b528b1bb97dd9b712cb`
let url = `https://newsapi.org/v2/everything?q=tcs&apiKey=398a122378434b528b1bb97dd9b712cb`
let headlines = null
export const fetchEverything = async()=>{

        await fetch(url)
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            headlines = data
        })
        
        return headlines
}