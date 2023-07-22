import React from 'react';
import Slider from 'react-slick';

function Banner() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        pauseOnHover:false,
          
      };


  return (

    <div >
    
    <Slider className='h-[500px]' {...settings}>
      <div>
        <img src="/images/bg_1.jpg" className='w-full h-[600px]' alt="" />
      </div>
      
      <div>
      <img src="/images/bg_2.jpg" className='w-full h-[600px]'   alt="" />
      </div>
      
      
      
    </Slider>
    </div>
  )
}

export default Banner