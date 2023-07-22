import React from 'react';
import Footer from './Footer';
import Header from './header';

function About() {
  return (
    <>
    <Header/>
     <section className="hero-wrap hero-wrap-2 ftco-degree-bg js-fullheight" style={{backgroundImage:" url('images/bg_1.jpg')"}} data-stellar-background-ratio="0.5">
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
          <div className="col-md-9  pb-5 text-center">
          	<p className="breadcrumbs"><span className="mr-2"><a href="/">Home <i className="ion-ios-arrow-forward"></i></a></span> <span>About us <i className="ion-ios-arrow-forward"></i></span></p>
            <h1 className="mb-3 bread">About Us</h1>
          </div>
        </div>
      </div>
    </section>

    <section className="ftco-section ftco-no-pb">
			<div className="container">
				<div className="row no-gutters">
					<div className="col-md-6 p-md-5 img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage: "url(images/about.jpg)"}}>
					</div>
					<div className="col-md-6 wrap-about py-md-5 ">
	          <div className="heading-section p-md-5">
	            <h2 className="mb-4">We Put People First.</h2>

	            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	            <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
	          </div>
					</div>
				</div>
			</div>
		</section>
        <Footer/>   
    </>
  )
}

export default About