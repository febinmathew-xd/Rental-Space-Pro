import React from 'react'

function Address(props) {
  return (
    <div className="w-full h-36 bg-white mt-4 px-6 flex flex-col justify-around py-4">
                    <div className="flex justify-between">
                    <div className="flex items-center">
                        <h1 className="font-bold text-lg opacity-75">Address</h1>
                        <i className="fa-solid fa-circle-check ml-4 text-fuchsia-600/90"></i>
                     </div>
                     <button type="button" style={{outline:"none"}} className="text-fuchsia-600 font-bold hover:text-fuchsia-600/70 cursor-pointer">Change</button>
                    </div>
                    <div className=" w-[450px]">
                        <h1 className="font-bold opacity-60">HOME</h1>
                        <p className="text-sm opacity-50">{props.obj.address}</p>
                    </div>
                </div>
  )
}

export default Address