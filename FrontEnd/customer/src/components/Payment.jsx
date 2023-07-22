import React from 'react'

function Payment() {
  return (
    <div className="w-full h-52 bg-white mt-4">
                  <h1 className="font-bold text-lg px-6  opacity-75">Choose payment method</h1>
                  <div className="flex">
                    <div className="paylist bg-fuchsia-300/40 rounded h-36 mt-4 w-52 ml-4">
                    <div className="flex flex-col justify-start mt-4 w-full h-full  text-sm font-bold ">
                     
                     <h1 className="opacity-70 hover:opacity-80 cursor-pointer py-2 px-6 rounded bg-white">Pay on Time</h1>
                    </div>
                    </div>
                    <div className="payondel w-[310px] -400 mx-3">
                       <img width="40" height="40" className="mt-4" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_80/PaymentLogos/instruments/4x/Cod" alt=""/>
                       <h1 className="font-bold opacity-80 my-3">Cash/Pay on Time</h1>
                       <p className=" text-sm opacity-50 w-3/4">Pay cash at time of delivery. You can also pay online anytime after placing order.</p>
                    </div>
                    
                  </div>
                </div>
  )
}

export default Payment