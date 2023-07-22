import React, { useState,useEffect } from "react";
import Header from "./header";
import Loggedin from "./Loggedin";
import Address from "./Address";
import Payment from "./Payment";
import Cartaside from "./Cartaside";
import EmptyCartAside from "./EmptyCartAside";


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

  return (
    <>
      <Header />

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
             <Cartaside obj={cart} refresh={refresh} />
            </div>
            )
          }
           
          

        

        </div>
      </main>
    </>
  );
}

export default Cart;
