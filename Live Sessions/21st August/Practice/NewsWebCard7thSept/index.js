// console.log('fetchapi');
let newsData=null;
const getNewsData=async()=>{
    await fetch('https://randomuser.me/api/')
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        console.log(data.results);
        newsData=data.results;
    }).catch(err=>{console.log(err)})
    return newsData;
}


let fetchNews=async()=>{
    const news=await getNewsData();
    console.log(news);
    let n1=document.getElementById('news-card')
    studentData=[];
    news.forEach(item => {
        const database=
        `<div>
        <img src="${item.picture.large}" class="card-img-top" alt="...">
        <div class="card-body">
        <p class="card-text">${item.name.first}</p>
        <p class="card-text">${item.email}</p>
          <p class="card-text">${item.phone}</p>
        </div>
        </div>`
        studentData.push(database);
        
    });
    n1.innerHTML=studentData;
}
fetchNews();