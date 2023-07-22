import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Subcategory() {
  const [subcategory, setSubcategory] = useState([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/getsubcategory").then((res) => {
      res.json().then((data) => {
        setSubcategory(data);
      });
    });
  }, [refresh]);

  const deletecategory = (id) => {
    let param = {
      id: id,
    };
    fetch("http://127.0.0.1:8000/api/deletecategory", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(param),
    }).then((res) => {
      res.json().then((data) => {
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
      <Sidebar />
      <Navbar />
      <ToastContainer />
      <div className="content">
        <div className="col-sm-12 col-xl-12">
          <div className="bg-secondary rounded h-100 p-4">
            <Link to="/addsubcategory" className="btn btn-primary">
              + ADD SUBCATEGORY
            </Link>

            <table
              className="table mt-5"
              style={{ backgroundColor: "#8d99ae", width: "800px" }}
            >
              <thead>
                <tr>
                  <th className="text-dark">Sub Category</th>

                  <th className="text-dark">Category</th>

                  <th className="text-dark">Action</th>
                </tr>
              </thead>
              <tbody>
                {subcategory.map((values) => {
                  return (
                    <tr>
                      <td className="text-dark">{values.subcategory}</td>

                      <td className="text-dark">{values.category}</td>

                      <td className="text-dark">
                        <Link
                          to="/editcategory"
                          className="btn btn-success"
                          style={{ marginRight: 12 }}
                          state={{ id: values.id }}
                        >
                          Edit
                        </Link>
                        <a
                          href=""
                          className="btn btn-danger ml-2"
                          onClick={(e) => {
                            e.preventDefault();
                            deletecategory(values.id);
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
export default Subcategory;
