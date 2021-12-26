let headlines = null
export const fetchHeadlines = async()=>{

        await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=398a122378434b528b1bb97dd9b712cb')
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            headlines = data
        })
        
        return headlines
}