import React, { useEffect, useState } from 'react';
import Header from './header';
import Sec from './section';
import Mouseicon from './mouseicon';
import Banner from './Banner';
import Category from './Category';
import ProductWrap2 from './ProductWrap2';
import Footer from './Footer';
import {  useParams } from 'react-router-dom';


function Categoryview() {

 const {id} = useParams();

  

  return (
    
    <>
     <Header/>
     <Banner/>
     <Category/>
     <ProductWrap2 id={id}/>
     <Footer/>

     

    </>
  )
}

export default Categoryview