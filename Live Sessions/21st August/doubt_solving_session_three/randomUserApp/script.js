console.log('hello')
let randomUserData = null
const getRandomUserData = async ()=> {

        await fetch('https://randomuser.me/api/')
        .then(res=> res.json())
        .then(data=>{
                console.log(data.results)
                randomUserData = data.results
        })
        .catch(err=>{
                console.log(err)
        })

    return randomUserData; 

}

const displayRandomUserData = async()=>{

    const data1 = await getRandomUserData()
    console.log(data1)
//     console.log(data.results[0])
//     const userImg = data.results[0].picture.large
//     const firstname = data.results[0].name.first
//     const lastname = data.results[0].name.last
//     const city = data.results[0].location.city
//     const country = data.results[0].location.country
//    // console.log(userImg)

//     const dataTemplate = 
//     `
//         <div class="container d-flex align-items-center flex-column">
//                 <!-- Masthead Avatar Image-->
//                 <img class="masthead-avatar mb-5" src=${userImg} alt="..." />
//                 <!-- Masthead Heading-->
//                 <h1 class="masthead-heading text-uppercase mb-0">
//                         ${firstname} ${` `} ${lastname}
//                 </h1>
//                 <!-- Icon Divider-->
//                 <div class="divider-custom divider-light">
//                     <div class="divider-custom-line"></div>
//                     <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
//                     <div class="divider-custom-line"></div>
//                 </div>
//                 <!-- Masthead Subheading-->
//                 <p class="masthead-subheading font-weight-light mb-0">
//                     ${city},${country}
//                 </p>
//             </div>
            
//             `

//     const id = document.getElementById('randomuser')
//     id.innerHTML = dataTemplate

}
displayRandomUserData()

