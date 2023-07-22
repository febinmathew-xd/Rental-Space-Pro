import React, {useState} from "react";
import { Link } from "react-router-dom";
import Header from "./header";

function Login() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginUser = () =>{
    let param = {
      email:email,
      password:password,
    }
    fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      body:JSON.stringify(param),
      headers: {
        Accept: "application/json",
        "Content-Type": 'application/json'
      },

    }).then((response)=>{
      response.json().then((data)=>{

       

        if(data){
          console.log(data.usertype);
          localStorage.setItem('userdata',JSON.stringify(data));
          localStorage.setItem('usertype', data.usertype);

          setTimeout(() => {
            window.location.reload()
          }, 100);
        }
        else{
          alert('Invalid User')
        }


      });
    });

  };

  return (
    <>
      <Header/>
      <div className="content">
        <div
          className="row mt-5 drop-shadow-lg "
          style={{ position: "absolute", top: "100px", left: "500px" }}
        >
          <div className="col-nd-3 w-[500px] border rounded-lg drop-shadow-sm px-6 py-16">
            <h1 className="font-bold mb-4">LOGIN</h1>
           
            <div className="form-floating mb-3  ">
              <input
                type="Email"
                className="form-control mb-7"
                id="floatingInput"
                placeholder="Email ID"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              {/*<label for="floatingInput">Email address</label>*/}
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control mb-8"
                id="floatingPassword"
                placeholder="Password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              {/*<label for="floatingPassword">Password</label>*/}
            </div>

            <button
              type="submit"
              className="btn btn-primary font-bold hover:opacity-80"
              style={{ backgroundColor: "#16aeeb", width: "100px" }}
              onClick={() => {loginUser()}}
            >
              Login
            </button>
            <Link to="/register">
            <button
              type="submit"
              className="btn btn-primary ml-10 font-bold"
              
            >
              Register
            </button>
            </Link>
            
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
