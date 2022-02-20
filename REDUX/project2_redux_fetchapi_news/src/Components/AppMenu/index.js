 import React from "react";
 import './index.css';
 import { Link } from "react-router-dom";

export default function AppMenu(){
 return(
   <div className='staystrong'>
      <header id="header" class="fixed-top d-flex align-items-center">
    <div class="container">
      <div class="header-container d-flex align-items-center justify-content-between">
        <div class="logo">
          <h1 class="text-light"><a href="index.html"><span>NewsAPI</span></a></h1>
          {/* <!-- Uncomment below if you prefer to use an image logo --> */}
          {/* <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>--> */}
        </div>

        <nav id="navbar" class="navbar">
          <ul>
            <li><Link class="nav-link scrollto active" to="/headlines">TOP Headlines</Link></li>
            <li><Link class="nav-link scrollto" to="/technews">Technology News</Link></li>
            <li><Link class="nav-link scrollto" to="/businessnews">Business News</Link></li>
            
            <li class="dropdown"><Link to='/headlines'><span>News</span> <i class="bi bi-chevron-down"></i></Link>
              <ul>
                <li><Link to='/headlines'>TOP Headlines</Link></li>
                <li><Link to='/technews'>Technology News</Link></li>
                <li><Link to='/businessnews'>Business News</Link></li>
              </ul>
            </li>
            <li><Link class="nav-link scrollto" to='/contact'>Contact us</Link></li>
            <li><Link class="nav-link scrollto" to="/enquirylist">Enquiry List</Link></li>
            <li><Link class="getstarted scrollto" to='/'>News Updates</Link></li> 
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
        {/* <!-- .navbar --> */}

      </div>
      {/* <!-- End Header Container --> */}
    </div>
    </header>
   </div>
 )   
}