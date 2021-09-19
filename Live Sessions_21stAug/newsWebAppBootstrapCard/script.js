let news_data = null
const getNewsData = async () => {
    await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=398a122378434b528b1bb97dd9b712cb')
    .then(res=> res.json())
    .then(res=>{
      console.log(res)
      console.log(res.articles)
      news_data = res.articles
   
        

    })
    .catch(err=>{
      console.log(err)
    })
    return news_data
}

const fetchNews = async()=>{

    const data = await getNewsData()
    console.log(data)
    console.log(data[0])
    const n1 = document.getElementById('news_one')
    news_length = data.length
    news_array = []
    data.forEach((item,index)=>{

      const newsCard = `
          <tr>
          <td> 
          <div key=${index} class="p-16 col" style="width:50%;height:20%;">
            <img class="card-img-top" src=${data[index].urlToImage} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">${data[index].title}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a target='_blank' href=${data[index].url} class="btn btn-primary">Full Article</a>
              </div>
          </div>
          </td>
          </tr> 
        `
        news_array.push(newsCard)
       
    })
    
    console.log(news_array)
   
    n1.innerHTML = news_array
  //  n1.innerHTML = newsCard

}
fetchNews()






  