import React, {useState} from 'react';
import { Link } from 'react-router-dom';




function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const loginuser = () => {


        let param = {
            email:email,
            password:password
        }
        fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      body: JSON.stringify(param),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      response.json().then((data) => {


        if(data){

            localStorage.setItem('userdata',JSON.stringify(data)); 
            localStorage.setItem('usertype',data.usertype); 

            setTimeout(()=>{
                window.location.reload()

            },100)
        }else{
            alert('invalid user')
        }
 
      });
    });
    };


    
  return (
    <>
    <div className="container-fluid">
            <div className="row h-100 align-items-center justify-content-center" style={{minheight: "100vh"}}>
                <div className="col-12 col-sm-8  col-md-6 col-lg-5 col-xl-4">
                    <div className="bg-secondary rounded p-4 p-sm-5 my-4 mx-3 mt-5 "   >
                        <div className="d-flex align-items-center justify-content-center mb-3">
                            <a href="#" className="">
                                <h3 className="text-primary"><i className="fa fa-user-edit me-2"></i>RENTAL SPACE</h3>
                            </a>
                            {/* <h3>LOGIN</h3> */}
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" 
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                            />
                            <label >Email address</label>
                        </div>
                        <div className="form-floating mb-4">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" 
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}
                            />
                            <label >Password</label>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            
                            <a href="#">Forgot Password</a>
                        </div>

                        <button type="submit" className="btn btn-primary py-3 w-100 mb-4" 
                        onClick={() => {loginuser()}}
                        >Login</button>

                        <p className="text-center mb-0">Don't have an Account? <Link to="/userRegister">Sign Up</Link></p>

                    </div>
                </div>

                
                {/* <div className='mt-4' style={{minheight:'auto'}}>
                    <div className='d-flex align-items-center justify-content-center  ' style={{border:'1px solid rgba(255, 255, 255, .2)', marginLeft:'450px', marginRight:'450px', borderRadius:'10px', paddingTop:'10px', paddingBottom:'10px'}}>
                        <h2 style={{fontSize:'20px', fontWeight:'lighter'}}>Become a <span style={{color:'red', marginLeft:'5px', marginRight:'5px'}}>Rental Space</span> Vendor Today</h2>
                        <button to="/vendorRegister" style={{border:'none', background:'red', color:'white', fontSize:'15px', marginLeft:'30px', padding:'5px 20px 5px 20px', borderRadius:'10px'}}><Link to='/vendorRegister' style={{color:"white"}}> Get Started </Link></button>
                    </div>
                </div> */}
            </div>
        </div>
    </>
  )
}

export default Login