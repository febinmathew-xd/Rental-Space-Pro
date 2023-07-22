import React, {useState} from 'react';
import { Link } from 'react-router-dom';


function RegisterVendor() {
    
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState();
    const [password, setPassword] = useState();



  return (
    <div className="container-fluid">
    <div className="row h-100 align-items-center justify-content-center" style={{minHeight: "100vh"}}>
        <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
            <div className="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
                <div className="d-flex align-items-center justify-content-center mb-3">
                    <a href="#" className="d-flex-column text-center">
                        <h3 className="text-primary"><i className="fa fa-user-edit me-2"></i>RENTAL SPACE</h3>
                        <h6 style={{opacity:'.5'}}>VENDOR REGISTRATION</h6>
                        
                    </a>
                    
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingText" placeholder="Name"
                    onChange={(event) => {
                        setName(event.target.value);
                    } }
                    />
                    <label htmlFor="floatingText">Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                    />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="tel" maxLength={10} className="form-control" id="floatingInput" placeholder="Phone Number"
                    onChange={(event) => {
                        setPhone(event.target.value);
                
                    }}
                    />
                    <label htmlFor="floatingInput">Phone Number</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Address"
                    onChange={(event) => {
                        setAddress(event.target.value);
                    }}
                    />
                    <label htmlFor="floatingInput">Address</label>
                </div>
                <div class="form-floating mb-4">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                
                <button type="submit" className="btn btn-primary py-3 w-100 mb-4">Sign Up</button>
                <p className="text-center mb-0">Already have an Account? <Link to="/Login">Login</Link></p>
            </div>
        </div>
    </div>
</div>
  )
}

export default RegisterVendor