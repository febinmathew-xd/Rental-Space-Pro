import React, {useEffect, useState} from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import { mediaurl } from './mediaurl';

function ProductContainer(props) {

   const [product, setProducts] = useState(props.obj);
   const [itemid, setItemid] = useState(props.obj.id);
   const[user, setUser] = useState(JSON.parse(localStorage.getItem("userdata")));
   const [userid, setUserid] = useState(user.loginid);
   const navigate = useNavigate();

   

   

   

   
   
  const addCart = () => {

	console.log(userid)

      let param = { 
		itemid: itemid,
		userid: userid,
		
	  }

	  fetch("http://127.0.0.1:8000/api/addcart", {
		method:"POST",
		body: JSON.stringify(param),
		headers:{
			Accept: "application/json",
			"Content-Type" :"application/json"
		},
	  }).then((response) => {
		response.json().then((data)=>{
			toast.success("Added to cart!", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			  });
	  
			  setTimeout(() => {
				navigate("/cart");
			  }, 1000);
		})
	  })
       
			
  };
  

  return (

	<>
	<ToastContainer/>
	
	
				<div key={product.id} className="col-md-4 mt-16 drop-shadow-xl rounded-lg hover:scale-105  ease-in cursor-pointer transition-transform ">
        		<div className="property-wrap  ">
        			
        			<div className="text border-2 rounded-lg">
                    <img src={mediaurl+product.image} width={300} alt="" className='rounded-lg' />
					<h3><a href="#">{product.name}</a></h3>
        				<p className="price"><span className="old-price">{product.price+(Math.floor(product.price * .2))}</span><span className="orig-price">₹  {product.price}<small>/day</small></span></p>
        				
        				
        				<span className="location overflow-x-hidden">{product.description}</span>
        			    <button onClick={addCart} style={{outline:"none"}} className="d-flex align-items-center justify-content-center btn-custom hover:opacity-90">
        					<span className="ion-ios-add "></span>
        				</button> 
        			</div>
        		</div>
        	</div>
			
	

	
    
			</>
  )
}

export default ProductContainer