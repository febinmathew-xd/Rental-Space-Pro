import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddProduct() {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState([]);
  const [categoryId, setCatId] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [dummysubcategory, setDummySubcategory] = useState([]);
  const [filename,setFilename] = useState()
 /*  const [subcatById, setSubcatById] = useState(); */
  const [subcatId, setSubcatId] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/getcategory").then((res) => {
      res.json().then((data) => {
        setCategory(data);
        console.log(data);
      })
    });
    fetch("http://127.0.0.1:8000/api/getsubcategory").then((res) => {
      res.json().then((data)=>{
        /* setSubcategory(data); */
        setDummySubcategory(data);
      })
    }); 
  },[]);

  const saveProduct = () => {
    const userdata = JSON.parse(localStorage.getItem('userdata'))
    let param = {
      name: name,
      description: description,
       categoryId: categoryId,
       subcatId: subcatId,
      price: price,
      image:filename,
      vendorid:userdata.loginid
    };
    fetch("http://127.0.0.1:8000/api/addproduct", {
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
          navigate("/");
        }, 1000);
      });
    });
  };

  /* Setting subcategory by Id */

  function handleChange(evt) {
    // console.log("new value", evt.target.value);
    setCatId(evt.target.value);


    let subcats = dummysubcategory.filter((value)=>{
      return(value.categoryid==evt.target.value)
    })

    setSubcategory(subcats)
   
    
  }

  const handleFileUpload =(file)=>{


    let formdata = new FormData()
  

    formdata.append('image',file)

    fetch("http://127.0.0.1:8000/api/fileupload", {
      method: "POST",
      body:formdata
    }).then((response) => {
      response.json().then((data) => {
        setFilename(data)
      });
    });
  }


  return (
    //need to add input field for adding product here..

    <>
      <Sidebar />
      <Navbar />
      <ToastContainer />
      <div className="content" style={{ marginTop: "1px" }}>
        <div style={{ paddingTop: "20px" }}>
          <h6 className="mb-4" style={{ marginLeft: "21px" }}>
            ADD PRODUCT
          </h6>
        </div>
        <div className="col-sm-6 col-xl-6 ml-5" style={{ marginLeft: "20px" }}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id=""
              placeholder="Product Name"
              onChange={(event) => {
                setName(event.target.value);
              }}
              required
            />

            <label for="floatingInput"> Enter Product Name</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id=""
              placeholder="Description"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />

            <label for="floatingInput">Description</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id=""
              placeholder="Price"
              onChange={(event) => {
                setPrice(event.target.value);
              }}
              required
            />

            <label for="floatingInput">Price</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="file"
              className="form-control"
              id=""
              placeholder="Image"
              onChange={(event) => {
                handleFileUpload(event.target.files[0]);
              }}
              
              required
            />

            <label for="floatingInput">Image</label>
          </div>

          

          <div className=" mb-3">
            <label htmlFor="category" className="text-white">
              Select Category
              <select
                className="form-control mt-3"
                style={{ backgroundColor: "black" }}
                
                onChange={handleChange}
              >
                <option>select</option>
                {category.map((value) => {
                
                return (
                  <option value={value.id}>{value.category}</option>
                )
                
               
              })
            }
             
              
              </select>
            </label>
          </div>


       {/*    Sub category container starts here.. */}

       
       <div className=" mb-3">
            <label htmlFor="" className="text-white">
              Select Sub Category
              <select
                className="form-control mt-3"
                style={{ backgroundColor: "black" }}
              onChange={(event)=> {
                  setSubcatId(event.target.value);
              }}
               >
                <option>select</option>
                {subcategory.map((value) => {
                console.log(value)
                return (
                  <option value={value.subcatid}>{value.subcategory}</option>
                )
                
               
              })
            }
             
              
              </select>
            </label>
          </div>


         

         

          <div className="form-floating">
            <button
              type="submit "
              className="btn btn-danger"
              onClick={() => saveProduct()}
            >
              Save Product
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
