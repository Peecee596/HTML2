// console.log('html');

let news_data=null;
const getNewsData=async ()=>{
    await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=398a122378434b528b1bb97dd9b712cb')
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        console.log(data.articles);
        news_data=data.articles;
    }).catch(error=>console.log(error))

    return news_data;
}

// getNewsData();

const fetchNews= async()=>{
    const topNews=await getNewsData();
    console.log(topNews);
    let id=document.getElementById('news-card');
    liveNews=[];
    topNews.forEach(item => {
        const news=`
        <img src="${item.urlToImage}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.description}</p>
            <a href="#" class="btn btn-primary">${item.url}</a>
        </div>`
    liveNews.push(news);
    });
    id.innerHTML=liveNews;
}
fetchNews();