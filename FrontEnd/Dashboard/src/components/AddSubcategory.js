import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function AddSubcategory() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState();
  const [subcategory, setSubCategory] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/getcategory").then((response) => {
      response.json().then((data) => {
        setCategories(data);
      });
    });
  }, []);

  const save = () => {
    let param = {
      categoryid: category,
      subcategory: subcategory,
    };
console.log(param)
    fetch("http://127.0.0.1:8000/api/addsubcategory", {
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
          navigate("/subcategory");
        }, 1000);
      });
    });
  };
  return (
    <>
      <Sidebar />
      <Navbar />
      <ToastContainer />
      <div className="content" style={{ marginTop: "1px" }}>
        <div style={{ paddingTop: "20px" }}>
          <h6 className="mb-4" style={{ marginLeft: "21px" }}>
            ADD SUBCATEGORY
          </h6>
        </div>
        <div className="col-sm-6 col-xl-6 ml-5" style={{ marginLeft: "20px" }}>
          <div className="form-floating mb-3">
            <select
              type="text"
              className="form-control"
              id="" 
              onChange={(event) => {
                setCategory(event.target.value);
              }}
            >
              <option value='0'>Select Category</option>
              {categories.map((value) => {
                return <option value={value.id}>{value.category}</option>;
              })}
            </select>
            <label for="floatingInput">Category</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id=""
              placeholder="Email ID"
              onChange={(event) => {
                setSubCategory(event.target.value);
              }}
            />

            <label for="floatingInput"> Enter The Sub Category</label>
          </div>

          <div className="form-floating">
            <button
              type="submit"
              className="btn btn-danger"
              onClick={() => save()}
            >
              save subcategory
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddSubcategory;
