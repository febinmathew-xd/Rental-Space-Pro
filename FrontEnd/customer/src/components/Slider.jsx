import React from 'react';
import Flickity from 'react-flickity-component';

const flickityOptions = {
    initialIndex: 2
};



function Slider() {
  return (
    <div>
    <Flickity
    className='carousel' // default ''
    elementType='div' // default 'div'
    options={flickityOptions} // takes flickity options {}
    disableImagesLoaded={false} // default false
    reloadOnUpdate // default false
    static // default false
  >
    <img src="/images/bg_1.jpg"/>
    <img src="/images/bg_2.jpg"/>
    <img src="/images/firstbg.png"/>
  </Flickity>
  </div>
  )
}

export default Slider