import React, {useState} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import Header from './header';



function Registration() {


    const [name,setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();


    const registerUser = () => {
        let param = {
            name:name,
            address:address,
            email:email,
            phone:phone,
            password:password,
            
        };

        fetch("http://127.0.0.1:8000/api/registeruser", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(param),
        }).then((response) => {
            response.json().then((data)=> {
               
                navigate('/');
            });
        });
    };


    return (
        <>
        <Header/>
        <div className="content">
        
        <div className="row drop-shadow" style={{position:'absolute',top:'100px',left:'500px'}}>
        <div className="col-nd-3 w-[550px] border rounded-lg px-16 py-4 drop-shadow ">
            <h1 className='font-bold text-lg'>Register</h1><br/>
                        
                        
                            <div className="form-floating mb-3">
                                <input type="Name" className="form-control" id="floatingInput"
                                    placeholder="Name" 
                                    onChange={(event) => {
                                        setName(event.target.value)
                                    }}
                                    />
                               
                            </div>
                            <div className="form-floating mb-3">
                                <input type="Address" className="form-control" id="floatingInput"
                                    placeholder="Address" 
                                    onChange={(event) =>{
                                        setAddress(event.target.value)
                                    }}
                                    />
                              
                            </div>
                            <div className="form-floating mb-3">
                                <input type="Contact Number" className="form-control" id="floatingInput"
                                    placeholder="Contact Number" 
                                    onChange={(event) => {
                                        setPhone(event.target.value)
                                    }}
                                    />
                                
                            </div>
                            <div className="form-floating mb-3">
                                <input type="Email" className="form-control" id="floatingInput"
                                    placeholder="Email ID"
                                    onChange={(event) => {
                                        setEmail(event.target.value)
                                    }} />
                                
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword"
                                    placeholder="Password"
                                    onChange={(event) => {
                                        setPassword(event.target.value)
                                    }} />
                                
                            </div>

                            <button type="submit" className="btn btn-primary font-bold mb-4" onClick={() => {
                                registerUser()
                            }} >Sign Up</button>
                            <hr/>
                            <div className='flex gap-3 mt-4'>
                            <p for="floatingInput"> Already have an Account? </p><Link to="/" className="underline hover:underline text-fuchsia-500 hover:opacity-50" >Login</Link></div>
                            
                            
                            

                            </div>
                
                </div>
                

</div>

</>   
    );
}

export default Registration;