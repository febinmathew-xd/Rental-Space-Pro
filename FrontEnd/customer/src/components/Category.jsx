import React, {useEffect, useState} from 'react';
import { NavLink, Link } from 'react-router-dom';


function Category() {
 
     const [Category, setCategory] = useState([]);

    
    useEffect(() => {
      fetch("http://127.0.0.1:8000/api/getcategory").then((res)=> {
        res.json().then((data) => {
          setCategory(data);
          console.log(Category);
        })
      })
    },[]);


  return (
<div className='category-container w-screen mt-24 z-[999] ' >
    <h1 className='font-bold text-xl mx-24 mb-4'>Categories</h1>
    <div className='flex justify-start mx-24 flex-wrap gap-4 items-center'>
      {Category.map((value)=> {

        return(
          <Link to={`/category/${value.id}`}  className=' rounded px-12  min-w-6 flex justify-center h-10 whitespace-nowrap items-center font-bold bg-fuchsia-500 text-white drop-shadow-md border-neutral-900 hover:bg-fuchsia-500/80 cursor-pointer ' >{value.category}</Link>
        )
      })}
        
        
    </div>
    <hr className='mt-6 mx-24' />
</div>
  )
}

export default Category