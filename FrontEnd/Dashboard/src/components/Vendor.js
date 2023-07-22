import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import { ToastContainer, toast } from "react-toastify";


function Vendor() {
    const [vendors, setVendors] = useState([]);
    const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/getvendors").then((res) => {
      res.json().then((data) => {
        setVendors(data);
      });
    });
  },[refresh]);
  
  
  const vendorDelete = (id) => {
    let param = {
      id: id,
    };
    fetch("http://127.0.0.1:8000/api/vendordelete", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(param),
    }).then((res) => {
      res.json().then((data) => {
        setRefresh((prev) => prev + 1);
        
      });
    });
  };

  return (
    <>
    <Sidebar/>
    <Navbar/>
    <ToastContainer/>
    <div className="content">
      <div className="col-sm-12 col-xl-12">
        <div className="bg-secondary rounded h-100 p-4">
          <h6 className="mb-4">ADD VENDOR</h6>
          <Link
            to="/Add"
            className="btn btn-primary"
            
          >
            + ADD VENDOR
          </Link>

          
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Phone</th>
                
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {vendors.map((values) => { 
                return (
                  <tr>
                    <td>{values.name}</td>
                    <td>{values.address}</td>
                    <td>{values.phone}</td>
                    
                    <td>
                        <Link to='/editvendor'className="btn btn-success" style={{marginRight:12}} state={{id:values.id}}>Edit</Link>
                      <a
                        href=""
                        className="btn btn-danger ml-2"
                        onClick={(e) => {
                          e.preventDefault();
                          vendorDelete(values.id);
                        }}
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                );
              })}
              <tr></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
}
export default Vendor;
