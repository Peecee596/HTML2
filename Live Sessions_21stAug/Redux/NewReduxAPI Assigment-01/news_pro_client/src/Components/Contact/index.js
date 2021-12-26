import React, { useState } from "react";
import { useHistory } from "react-router";
export function Contact(){

    const [name,setName]=useState(null)
    const[email,setEmail]=useState(null)
    const[subject,setSubject]=useState(null)
    const[message,setMessage]=useState(null)

    let history=useHistory();
    const handleInputChange=(e)=>{
        e.preventDefault();
        const target=e.target;
        const name=target.name;
        const value=target.value;
        console.log(name);
        console.log(value)

        if(name ==='name'){
            setName(value)
            console.log(true)
        }
        if(name === 'email'){
            setEmail(value)
            console.log(true)
        }
        if(name === 'subject'){
            setSubject(value)
            console.log(true)

        }
        if(name === 'message'){
            setMessage(value)
            console.log(true)
        }


    }
    const submitData=()=>{
            const formData={
                name:name,
                email:email,
                subject:subject,
                message:message
            }
            console.log(formData);
            // alert(formData)

            history.push({
                pathname:'/success',
                props:formData
            })
        }

        // const button=
        // <button onClick={()=>history.push({pathname:'/headlines'})}>Send Message</button>
        

    return(
        <div>
             <main id="main" className='down'>
            <section id="contact" class="contact">
                <div class="container">
                    <div class="row">
                    <div class="col-lg-4" data-aos="fade-right">
                        <div class="section-title">
                        <h2>Contact</h2>
                        <p>News API is great as a data source for news tickers and other applications where you want to show your users live headlines. We track headlines in 7 categories across over 50 countries, and at over a hundred top publications and blogs, in near real time.</p>
                        </div>
                    </div>

                    <div class="col-lg-8" data-aos="fade-up" data-aos-delay="100">
                        {/* <iframe style="border:0; width: 100%; height: 270px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe> */}
                        <div class="info mt-4">
                        <i class="bi bi-geo-alt"></i>
                        <h4>Location:</h4>
                        <p>A108 Adam Street, New York, NY 535022</p>
                        </div>
                        <div class="row">
                        <div class="col-lg-6 mt-4">
                            <div class="info">
                            <i class="bi bi-envelope"></i>
                            <h4>Email:</h4>
                            <p>support@newsapi.org</p>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="info w-100 mt-4">
                            <i class="bi bi-phone"></i>
                            <h4>Call:</h4>
                            <p>+1 5589 55488 55s</p>
                            </div>
                        </div>
                        </div>

                        <form onSubmit={submitData} class="php-email-form mt-4">
                        <div class="row">
                            <div class="col-md-6 form-group">
                            <input onChangeCapture={handleInputChange} type="text" name="name" class="form-control" id="name" placeholder="Your Name" required/>
                            </div>
                            <div class="col-md-6 form-group mt-3 mt-md-0">
                            <input onChangeCapture={handleInputChange} type="email" name="email" class="form-control"   placeholder="Your Email" required/>
                            </div>
                        </div>
                        <div class="form-group mt-3">
                            <input onChangeCapture={handleInputChange} type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required/>
                        </div>
                        <div class="form-group mt-3">
                            <textarea onChangeCapture={handleInputChange} class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                        </div>
                        
                        
                        <div class="text-center"><button type="submit">Send Message</button></div>
                      
                        </form>
                    </div>
                    </div>

                </div>
            </section>
            </main>
        </div>
    )
}