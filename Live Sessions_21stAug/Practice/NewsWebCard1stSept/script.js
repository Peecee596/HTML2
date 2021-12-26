// console.log('day1fetchapi');

let news_data=null;
const getNewsData=async ()=>{
    await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=398a122378434b528b1bb97dd9b712cb')
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        console.log(data.articles);
        news_data=data.articles;
        // console.log(news_data);
    }).catch(error=>console.log(error));
    return news_data;
}
// getNewsData();

const fetchNews=async () =>{
    const topNews= await getNewsData();
    console.log(topNews);
    console.log(topNews[0]);

    const id=document.getElementById('news-card');
    newsArray=[];
    topNews.forEach(item => {
        const news=`
        <div class="row g-0">
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
        </div>`
        newsArray.push(news);
        
    });
    id.innerHTML=newsArray;
}
fetchNews();
