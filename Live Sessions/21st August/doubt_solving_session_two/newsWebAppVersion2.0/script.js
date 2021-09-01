
let topHeadlines = null
const getTopHeadlines = async()=>{


       await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=398a122378434b528b1bb97dd9b712cb')
        .then(res => res.json())
        .then(data=>{
                console.log(data)
                topHeadlines = data.articles
            
        })
        
    return topHeadlines

}
const fetchNews = async()=>{

    const topNews = await getTopHeadlines()
    console.log('topNews',topNews)

    const id = document.getElementById('news-card')

    topNewsArray = []
    topNews.forEach((item)=>{

      const newsData = `
            <div class="card-header">
                News Article
            </div>
            <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <img src=${item.urlToImage} height='250' /> 
                <p class="card-text">${item.description}</p>
                <a href=${item.url} target='_blank' class="btn btn-primary">${item.url}</a>
            </div>
        `
        topNewsArray.push(newsData)

    })
    id.innerHTML = topNewsArray
}
fetchNews()