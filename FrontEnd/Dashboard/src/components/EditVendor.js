//import React from "react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import { ToastContainer, toast } from "react-toastify";



function EditVendor() {
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const navigate = useNavigate();
  const location = useLocation();


/*   const [email, setEmail] = useState();
  const [password, setPassword] = useState(); */
  

 

  useEffect(() => {
    let param = {
      id: location.state.id,
    };
    fetch("http://127.0.0.1:8000/api/getvendorbyid", {
      method: "POST",
      body: JSON.stringify(param),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      response.json().then((data) => {
        setName(data.name);
        setAddress(data.address);
        setPhone(data.phone);

        /* setEmail(data.email); */
        /* setPassword(data.password) */
        
      });
    });
  },[]);

  const saveVendor = () => {
    let param = {
      name: name,
      address: address,
      phone: phone,
      id: location.state.id,
    };

    fetch("http://127.0.0.1:8000/api/updatevendor", {
      method: "POST",
      body: JSON.stringify(param),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      response.json().then((data) => {
        toast.success("Saved successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setTimeout(() => {
          navigate("/Vendor");
        }, 1000);
        
        
      });
    });
  };
  return (
    <>
    <Sidebar/>  
    <Navbar/> 
    <ToastContainer/>
      <div className="content" style={{ marginTop: "1px" }}>
        
      <div style={{ paddingTop: "20px" }}>
          <h6 className="mb-4" style={{ marginLeft: "21px" }}>
            EDIT VENDOR
          </h6>
        </div>

        <div className="col-sm-6 col-xl-6 ml-5" style={{ marginLeft: "20px" }}>
          
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id=""
              placeholder="Name"
              onChange={(event) => {
                setName(event.target.value);
              }}
              value={name}
            />

            <label for="floatingInput">Name</label>
          </div>

          
          <div className="form-floating mb-3">
            <input
              value={address}
              type="text"
              className="form-control"
              id=""
              placeholder="Address"
              onChange={(event) => {
                setAddress(event.target.value);
              }}
            />
            <label for="floatingInput">Address</label>
          </div>


          <div className="form-floating mb-3">
            <input
              value={phone}
              type="tel"
              maxLength={10}
              className="form-control"
              id=""
              placeholder="Phone Number"
              onChange={(event) => {
                setPhone(event.target.value);
              }}
            />
            <label for="floatingInput">Phone Number</label>
          </div>


         {/*  <div className="form-floating mb-3">
            <input
              value={email}
              type="email"
              className="form-control"
              id=""
              placeholder="Email ID"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <label for="floatingInput">Email ID</label>
          </div> */}

         {/*  <div className="form-floating mb-3">
            <input
              value={password}
              type="password"
              className="form-control"
              id=""
              placeholder="Password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <label for="floatingInput">Password</label>
          </div> */}





          <div className="form-floating">
            <button
              type="Submit"
              className="btn btn-primary"
              onClick={() => saveVendor()}
              style={{ backgroundColor: "#16aeeb" }}
            >
              SAVE CHANGES
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default EditVendor;
