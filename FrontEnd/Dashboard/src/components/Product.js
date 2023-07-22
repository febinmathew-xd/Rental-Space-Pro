import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { mediaurl } from "./Env";

function Product() {
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const userdata = JSON.parse(localStorage.getItem('userdata'));

  useEffect(() => {
    let param = {
      vendorid:userdata.loginid
    }
    fetch("http://127.0.0.1:8000/api/getproducts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-Type": "appliction/json",
      },
      body: JSON.stringify(param),
    }).then((res) => {
      res.json().then((data) => {
        setProducts(data);
        console.log("products: ",data);
      });
    });
  }, [refresh]);

  const productDelete = (id) => {
    let param = { id: id, };
    fetch("http://127.0.0.1:8000/api/deleteproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-Type": "appliction/json",
      },
      body: JSON.stringify(param),
    }).then((response) => {
      response.json().then((data) => {
        toast.error("Delete successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            className: 'toast-red',
          });
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
            
          <Link to="/AddProduct" className="btn btn-primary">
              + ADD PRODUCT
            </Link>

            
            <table className="table">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Subcategory</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((value) => {
                  
                  return (
                    <tr key={value.id}>
                      <td>{value.name}</td>
                      <td>{value.description}</td>
                      <td>{value.category}</td>
                      <td>{value.subcategory}</td>
                      <td>
                        <img src={mediaurl+value.image} height={50}/></td>
                      <td>{value.price}/-</td>
                      <td>
                        <Link
                          to="/EditProduct"
                          className="btn btn-success"
                          style={{ marginRight: 12 }}
                          state={{ id: value.productid }}
                        >
                          Edit
                        </Link>
                        <button
                         
                          className="btn btn-danger ml-2"
                          onClick={(e) => {
                            e.preventDefault();
                            productDelete(value.productid);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default Product;
