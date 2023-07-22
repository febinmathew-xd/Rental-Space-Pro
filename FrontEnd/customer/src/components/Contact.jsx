import React, { useState } from 'react';
import Header from './header';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Contact() {

   const [title, setTitle] = useState('');
   const [feedback, setFeedback] = useState('');

   const userData = JSON.parse(localStorage.getItem('userdata'));
   const navigate = useNavigate();

  const sentFeedback = () =>{

    let param = {
      title:title,
      feedback:feedback,
      userid:userData.loginid
    };

    fetch("http://127.0.0.1:8000/api/addfeedback",{
    method: "POST",
    body: JSON.stringify(param),
    headers : {
        Accept : "application/json",
        "Content-Type" : "application/json",
    },

}).then((response) => {
    response.json().then((data) => {
        toast.success('Send Feedback', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    })
})

setTimeout(() => {

  navigate('/')
  
}, 2000);




  };




  return (
    <>
    <Header/>
    
    <section className="hero-wrap hero-wrap-2 ftco-degree-bg js-fullheight" style={{backgroundImage: "url('images/bg_1.jpg')"}} data-stellar-background-ratio="0.5">
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
          <div className="col-md-9  pb-5 text-center">
          	<p className="breadcrumbs"><span className="mr-2"><a href="/">Home <i className="ion-ios-arrow-forward"></i></a></span> <span>Contact <i className="ion-ios-arrow-forward"></i></span></p>
            <h1 className="mb-3 bread">Contact us</h1>
          </div>
        </div>
      </div>
    </section>


    <section className="ftco-section contact-section">
      <div className="container">
        <div className="row d-flex mb-5 contact-info justify-content-center">
        	<div className="col-md-8">
        		<div className="row mb-5">
		          <div className="col-md-4 text-center py-4">
		          	<div className="icon">
		          		<span className="icon-map-o"></span>
		          	</div>
		            <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
		          </div>
		          <div className="col-md-4 text-center border-height py-4">
		          	<div className="icon">
		          		<span className="icon-mobile-phone"></span>
		          	</div>
		            <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
		          </div>
		          <div className="col-md-4 text-center py-4">
		          	<div className="icon">
		          		<span className="icon-envelope-o"></span>
		          	</div>
		            <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
		          </div>
		        </div>
          </div>
        </div>
        <div className="row block-9 justify-content-center mb-5">
          <div className="col-md-8 mb-md-5">
          	<h2 className="text-center">Feedback</h2>
            <ToastContainer/>
            <div  className="bg-light p-5 contact-form">
              
              <div className="form-group">
                <input onChange={(e)=>{setTitle(e.target.value)}} style={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'}} type="text" className="form-control" placeholder="Title"/>
              </div>
              <div className="form-group">
                <textarea onChange={(e)=>{setFeedback(e.target.value)}} style={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'}} name="" id="" cols="30" rows="7" className="form-control" placeholder="Feedback"></textarea>
              </div>
              <div className="form-group">
                <input onClick={sentFeedback} style={{fontWeight:'700',boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'}} type="submit" value="Send Feedback" className="btn btn-primary py-3 px-5"/>
              </div>
            </div>
          
          </div>
        </div>
       
        </div>
    
    </section>  

    
    
    </>
  )
}

export default Contact