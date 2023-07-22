import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import { ToastContainer ,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Editcategory() {
  const [category, setcategory] = useState();
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    let param = {
      id: location.state.id,
    };
    fetch("http://127.0.0.1:8000/api/getcategorybyid", {
      method: "POST",
      body: JSON.stringify(param),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      response.json().then((data) => {
        setcategory(data.category);
      });
    });
  }, []);

  const editcategory = () => {
    let param = {
        id:location.state.id,
      category: category,
    };

    fetch("http://127.0.0.1:8000/api/updatecategory", {
      method: "POST",
      body: JSON.stringify(param),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      response.json().then((data) => {
        toast.success('Update successfully!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        // console.log(data);
        setTimeout(() => {
        navigate("/category");
    }, 1000);

      });
    });
  };
  return (
    <>
      <Sidebar />
      <Navbar />
      <ToastContainer/>

      <div className="content" style={{ marginTop: "1px" }}>
        <div style={{ paddingTop: "20px" }}>
          <h6 className="mb-4" style={{ marginLeft: "21px" }}>
            EDIT CATEGORY
          </h6>
        </div>
        <div className="col-sm-6 col-xl-6 ml-5" style={{ marginLeft: "20px" }}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id=""
              value={category}
              
              onChange={(event) => {
                setcategory(event.target.value);
              }}
            />
            <label for="floatingInput"> Enter The Category</label>
          </div>

          <div className="form-floating">
            <button
              type="submit"
              className="btn btn-danger"
              onClick={() => editcategory()}
            >
              update category
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Editcategory;
