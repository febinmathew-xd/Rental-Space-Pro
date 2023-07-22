import React from 'react'

function VendorView() {
  return (
    <div className='vendor-view w-full'>
        <h1 className='font-bold text-xl mx-24 my-4'>Vendors</h1>
        <div className='mx-24'>
            <ul className='flex justify-start gap-16 items-center text-center font-bold flex-wrap'>

                <li  className='hover:scale-105 ease-in transition-transform drop-shadow-lg'>
                    <img className='rounded-full' width={100} src="images/person_1.jpg" alt="" />
                    <p>Febin</p>
                </li>
                <li  className='hover:scale-105 ease-in transition-transform drop-shadow-lg'>
                    <img className='rounded-full' width={100} src="images/person_1.jpg" alt="" />
                    <p>Febin</p>
                </li>
                <li  className='hover:scale-105 ease-in transition-transform'>
                    <img className='rounded-full' width={100} src="images/person_1.jpg" alt="" />
                    <p>Febin</p>
                </li>
                <li  className='hover:scale-105 ease-in transition-transform drop-shadow-lg'>
                    <img className='rounded-full' width={100} src="images/person_1.jpg" alt="" />
                    <p>Febin</p>
                </li>
                <li  className='hover:scale-105 ease-in transition-transform drop-shadow-lg'>
                    <img className='rounded-full' width={100} src="images/person_1.jpg" alt="" />
                    <p>Febin</p>
                </li>
                <li  className='hover:scale-105 ease-in transition-transform drop-shadow-lg'>
                    <img className='rounded-full' width={100} src="images/person_1.jpg" alt="" />
                    <p>Febin</p>
                </li>
                
                
            </ul>
            <hr className='mx-24 my-6' />
        </div>
    </div>
  )
}

export default VendorView