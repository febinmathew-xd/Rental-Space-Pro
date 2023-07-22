import React from 'react'

function Loggedin(props) {
  return (
    <div className="w-full h-28 bg-white pl-6 flex flex-col justify-around py-4">
                 <div className="flex items-center">
                    <h1 className="font-bold text-lg opacity-75">Logged in</h1>
                    <i className="fa-solid fa-circle-check ml-4 text-fuchsia-600/90"></i>
                 </div>
                 <div  className="flex font-semibold opacity-80"> 
                    <h1>{props.obj.name}</h1>
                    <p className="mx-4">|</p>
                    <p>{props.obj.phone}</p>
                 </div>
                </div>
  )
}

export default Loggedin