let news_data = null;
let getNewsData= async()=>{
await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=398a122378434b528b1bb97dd9b712cb')
.then(response=>response.json())
.then(response=>{
    console.log(response);
    console.log(response.articles);
    news_data=response.articles;
}).catch(error=>console.log(error));
  return news_data; 

}

const fetchNews = async()=>{
    const newsheadlines= await getNewsData();
    console.log(newsheadlines);

    const id =document.getElementById('news-card');

    topNewsHeadlines=[];
    newsheadlines.forEach(item => {
      const news=`
    <div class="row g-0" id='border'>
          <div class="col-md-4">
            <img src="${item.urlToImage}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">${item.description}</p>
              <p class="card-text"><small class="text-muted">${item.publishedAt}</small></p>
            </div>
          </div>
        </div>
        <br/>
    `
    topNewsHeadlines.push(news);  
      
    });

id.innerHTML=topNewsHeadlines
// document.getElementById('border').style.border='1px solid black';
}
fetchNews();