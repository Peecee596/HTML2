// console.log('youtube');
let news_data=null;
getNewsData=async()=>{
    await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=398a122378434b528b1bb97dd9b712cb')
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        console.log(data.articles);
        news_data=data.articles;
    }).catch(error=>{console.log(error)});
    return news_data;
}
// getNewsData();

const fetchNews=async()=>
{
    const res= await getNewsData();
    console.log(res);
    console.log(res[4]);

    n1=document.getElementById('news_one');
    n2=document.getElementById('news_two');
    n3=document.getElementById('news_three');

    const heading1=`<h3>${res[3].title}</h3>`;
    const heading2=`<h3>${res[4].title}</h3>`;
    const heading3=`<h3>${res[5].title}</h3>`;

    const image1=`<img src=${res[3].urlToImage} />`;
    const image2=`<img src=${res[4].urlToImage} />`;
    const image3=`<img src=${res[5].urlToImage} />`;

    n1.innerHTML=heading1+image1;
    n2.innerHTML=heading2 +image2;
    n3.innerHTML=heading3+image3;

}
fetchNews();