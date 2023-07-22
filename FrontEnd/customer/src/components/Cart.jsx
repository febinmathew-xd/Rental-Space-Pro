import React, { useState,useEffect } from "react";
import Header from "./header";
import Loggedin from "./Loggedin";
import Address from "./Address";
import Payment from "./Payment";
import Cartaside from "./Cartaside";
import EmptyCartAside from "./EmptyCartAside";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Cart() {

  const [user, setUser] = useState();
  const [prouct, setProduct] = useState();
  const [cart, setCart] = useState([]);
  const [refresh , setRefresh] = useState(0);
  
  const [userdata, setUserData] = useState(JSON.parse(localStorage.getItem('userdata')));

   console.log("cart ",cart)


  useEffect(()=> {
    
    let param = {
      userid:userdata.loginid,
    };

    fetch("http://127.0.0.1:8000/api/getallcart", {
      method: "POST",
      body:JSON.stringify(param),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) =>{
        res.json().then((data)=> {
          console.log(data)
         setCart(data[0]);
         
        })
     });

     


  },[refresh]);

  const deleteCart = (id) => {
    let param = { id: id };
    fetch("http://127.0.0.1:8000/api/deletecart", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-Type": "appliction/json",
      },
      body: JSON.stringify(param),
    }).then((response) => {
      response.json().then((data) => {
        toast.error("Delete successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          className: "toast-red",
        });
        setRefresh((prev) => prev + 1);
      });
    });
  };

  return (
    <>
      <Header />
      <ToastContainer/>

      <main className="w-full min-h-screen bg-gray-400/20 pt-12 mt-24">
        <div className="w-[1200px]  mx-auto flex justify-between">
          {/*  <!-- IF AUTHENTICATED --> */}

          <div className="w-[750px] h-[500px]  ">
            <Loggedin obj={userdata} />
            <Address obj={userdata} />
            <Payment />
            
          </div>
          {
            !cart ? ( <div>
               <EmptyCartAside />
              
            </div>) : (
              <div>
             <Cartaside obj={cart} deleteCart={deleteCart} />
            </div>
            )
          }
           
          

        

        </div>
      </main>
    </>
  );
}

export default Cart;
