import React, {useState, useEffect} from 'react';
import ProductContainer from './ProductContainer';



function Productwrap(props) {
    


  const [products, setProducts] = useState([]);
  const [dummyProducts, setdummyProducts] = useState([]);



   useEffect(() => {
    let categoryId = props.id; 
    
    fetch("http://127.0.0.1:8000/api/getproducts/all").then((res) => {
      res.json().then((data) => { 
        setdummyProducts(data);

        setTimeout(() => {
          const productsData = data.filter((product) => { 
       
            return(product.categoryId==categoryId);
          })
        
      
          setProducts(productsData);
          
        }, 200);
      });
    });

     

    // console.log("Product Data : ", productsData);
 


   }, []);




  return (
    <div className='product-container mx-24'>
        <h1 className='font-bold text-xl mb-4'>{props.name}</h1>
        
              <div className='flex flex-wrap '>
              

          {products.map((product) => {
            return(
                <ProductContainer obj={product}/>
                )
              })}

              </div>
        

         <hr className='mt-2 my-6' />
         

        <div>
        
          
     
    
   
    
    
    
       
        </div>

    </div>
  )
}

export default Productwrap