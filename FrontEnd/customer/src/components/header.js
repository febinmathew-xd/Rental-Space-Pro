import {Link, NavLink} from 'react-router-dom' ;

function Header()
{

	

	const logoutUser = () => {
		localStorage.clear();
		localStorage.clear();
    setTimeout(() => {
        window.location.href='/';
      }, 100);
	};
    return(
		<div>
        	  <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div className="container mx-12">
	      <a className="navbar-brand hover:text-black" href="/">RENTALSPACE</a>
	    
	      <div className="navbar-collapse" id="ftco-nav">
	        <ul className="navbar-nav ml-auto">
	         
	          <li className="nav-item  "><NavLink activeclassname= 'active' to="/" active className="nav-link" style={{fontWeight:700}}>Home</NavLink></li>
			 
			  <li className="nav-item  "><NavLink activeclassname= 'active' to="/about" className="nav-link" style={{fontWeight:700}}>About</NavLink></li>
			  <li className="nav-item relative  "><NavLink activeclassname= 'active' to="/cart" className="nav-link" style={{fontWeight:700}}>Cart</NavLink></li>
			  <li className="nav-item relative  "><NavLink activeclassname= 'active' to="/history" className="nav-link" style={{fontWeight:700}}>Bookings</NavLink></li>
			  <li className="nav-item  "><NavLink activeclassname= 'active' to="/contact" className="nav-link" style={{fontWeight:700}}>Contact</NavLink></li>
		

	          {/* <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
	          <li className="nav-item"><a href="agent.html" className="nav-link">Registration</a></li>
	          <li className="nav-item"><a href="services.html" className="nav-link">Services</a></li>
	          <li className="nav-item"><a href="properties.html" className="nav-link">Properties</a></li>
	          <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
	          <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li> */}
	        </ul>
	      </div>
		  <div className='ml-16 cursor-pointer relative'>
			<div onClick={logoutUser} className='bg-fuchsia-400/40 w-[30px] h-[30px] flex items-center justify-center rounded-full'>
				<i className="fa-solid fa-user"></i>
			</div>
{/* 
			<div className='border px-6 rounded absolute bottom-[-4] left-[-2]'>
				<button type='submit' className='font-semibold  '>Logout</button>
				<i className="fa-solid fa-right-from-bracket ml-2"></i>
			</div> */}
		  
		  </div>
	    </div>
	  </nav>
	  

	     </div>

    )
}
export default Header;