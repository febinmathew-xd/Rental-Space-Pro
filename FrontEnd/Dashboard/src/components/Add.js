//import React from "react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import { ToastContainer, toasts } from "react-toastify";

function Add() {
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()
  const saveVendor = () => {
    let param = {
      name: name,
      address: address,
      phone: phone,
      email: email,
      password: password,
      usertype:1
    };

    // fetch('http://127.0.0.1:8000/api/gettest').then((response)=>{
    //     response.json().then((data)=>{
    //         console.log(data)
    //     })

    // })

    fetch("http://127.0.0.1:8000/api/addvendor", {
      method: "POST",
      body: JSON.stringify(param),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      response.json().then((data) => {
        // console.log(data);
        navigate('/Vendor')
      });
    });
  };
  return (
    <>
    <Sidebar/>
    <Navbar/>
    <ToastContainer/>
      <div className="content"  style={{ marginTop: "1px" }}>
      <div style={{ paddingTop: "20px" }}>
          <h6 className="mb-4" style={{ marginLeft: "21px" }}>
            ADD VENDOR
          </h6>
        </div>
        <div className="col-sm-6 col-xl-6 ml-5" style={{ marginLeft: "20px" }}>
          {/*<div className="bg-secondary rounded h-100 p-4">
                            <div className="form-floating mb-3">
                                <input type="Name" className="form-control" id="floatingInput"
                                    placeholder="Name"/>
                                <label for="floatingInput">Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="Address" className="form-control" id="floatingInput"
                                    placeholder="Address"/>
                                <label for="floatingInput">Address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="Contact Number" className="form-control" id="floatingInput"
                                    placeholder="Contact Number"/>
                                <label for="floatingInput">Phone Number</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="Email" className="form-control" id="floatingInput"
                                    placeholder="Email ID"/>
                                <label for="floatingInput">Email</label>

                     </div>
                            <div className="form-floating mb-3">
                                <input type="Password" className="form-control" id="floatingInput"
                                    placeholder="Password"/>
                                <label for="floatingInput">Password</label>
                                
    </div>*/}
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id=""
              placeholder="Email ID"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />

            <label for="floatingInput">Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
               id=""
              placeholder="Adress"
              onChange={(event) => {
                setAddress(event.target.value);
              }}
            />
            <label for="floatingInput">Address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="tel"
              maxLength={10}
              className="form-control"
              id=""
              placeholder="Phone number"
              onChange={(event) => {
                setPhone(event.target.value);
              }}
            />
            <label for="floatingInput">Phone Number</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id=""
              placeholder="Email ID"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <label for="floatingInput">Email ID</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id=""
              placeholder="Email ID"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <label for="floatingInput">Password</label>
          </div>
          <div className="form-floating">
            <button
              type="Submit"
              className="btn btn-primary"
              onClick={() => saveVendor()}
              style={{ backgroundColor: "#16aeeb" }}
            >
              SAVE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Add;
