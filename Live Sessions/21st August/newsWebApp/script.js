let news_data = null
const getNewsData = async () => {
    await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=398a122378434b528b1bb97dd9b712cb')
    .then(response=> response.json())
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
    const n2 = document.getElementById('news_two')
    const n3 = document.getElementById('news_three')
    const heading1 = `<h3> ${data[0].title}</h3>`
    const imgData1 = `<img src=${data[0].urlToImage} />`
    const heading2 = `<h3> ${data[1].title}</h3>`
    const imgData2 = `<img src=${data[1].urlToImage} />`
    const heading3 = `<h3> ${data[2].title}</h3>`
    const imgData3 = `<img src=${data[2].urlToImage} />`

    n1.innerHTML = heading1 + imgData1
    n2.innerHTML = heading2 + imgData2
    n3.innerHTML = heading3 + imgData3





}
fetchNews()






  