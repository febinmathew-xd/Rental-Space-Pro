import React, { useState, useEffect } from 'react';
import Mouseicon from './mouseicon';
import Sec from './section';
import Footer from './Footer';
import Header from './header';
import Slider from './Slider';
import Category from './Category';
import VendorView from './VendorView';
import Productwrap from './Productwrap';
import Banner from './Banner';



function Home() {

  
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(()=>{
      
    fetch("http://127.0.0.1:8000/api/getcategory").then((res) => {
      res.json().then((data) => {
        setCategory(data);
        
      });
    });


  }, []);



  return (
    <main className='overflow-x-hidden'>
     <Header/>
     <Banner/>
     <Category />
     
    
    {
      category.map((value) => {
            return(
                  <Productwrap name={value.category} obj={value} id={value.id}/>
            )
      })
    }

     
     
     <Footer/>
    </main>
  )
}

export default Home