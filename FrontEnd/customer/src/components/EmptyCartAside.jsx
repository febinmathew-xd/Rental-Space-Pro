import React from 'react';
import { Link } from 'react-router-dom';

function EmptyCartAside() {
  return (
    <>
    <div className='w-[550px] ml-4 h-[510px]  bg-white'>
        <div className='flex items-center justify-center h-3/4'> 
        <img src="/images/emptyCart/emptyCart.jpg" width={300} className='rounded-full' alt="" />
        </div>
        <h1 className='font-bold text-xl text-center -mt-10 opacity-80'>Oops..! Cart is Empty</h1>
        <div className='flex w-full justify-center mt-10'>
            <Link to='/' className=' bg-fuchsia-500 rounded-lg text-white/90  py-1 px-12 font-bold hover:text-white hover:bg-fuchsia-500/90'>See All Products</Link>
            </div>
        
        
        
    </div>
    </>
  )
}

export default EmptyCartAside