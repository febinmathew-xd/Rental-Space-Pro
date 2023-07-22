import React, {useState, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Sidebar from './sidebar';
import Navbar from './navbar';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { mediaurl } from "./Env";




function EditProduct() {

    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [categoryId, setCategoryId] = useState([]);
    const [category, setCategory] = useState([]);
    const [subcategory, setSubcategory] = useState([]);
    const [dummysubcategory, setDummySubcategory] = useState([]);
    const [subcatId, setSubcatId] = useState([]);
    const [image, setImage] = useState();
    
    const navigate = useNavigate();
    const location = useLocation();

        

    console.log('dummysubcat:',dummysubcategory);
    
   

    useEffect(()=>{
      let param = {
        id:location.state.id,
      };
      console.log(param);
      
      
      fetch("http://127.0.0.1:8000/api/getproductbyid", {
        method: "POST",
        body:JSON.stringify(param),
        headers:{
            Accept: "application/json",
            "Content-Type" : 'application/json',
        },
      }).then((response) => {
        response.json().then((data) => {
           console.log('data: ',data);
            setName(data.name);
            setDescription(data.description);
            setPrice(data.price);
            setCategoryId(data.categoryId);
            setSubcatId(data.subcatId);
            setImage(data.image);

            
        });
      });

       fetch("http://127.0.0.1:8000/api/getcategory").then((res) => {
      res.json().then((data) => {
        setCategory(data);
        
        
      })
    }); 

    fetch("http://127.0.0.1:8000/api/getsubcategory").then((res) => {
     
    res.json().then((data) => {
      
      
      setDummySubcategory(data);
      console.log('dummysubcat:',dummysubcategory);

      
    })

    });
    




    }, []);

    const saveProduct = ()=>{
        let param = {
            name: name,
            description:description,
            price: price,
            id:location.state.id,
            categoryId: categoryId,
            subcatId: subcatId,
        };
        fetch("http://127.0.0.1:8000/api/updateproduct", {
            method: "POST",
            body: JSON.stringify(param),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
        }).then((response)=>{
            response.json().then((data)=>{
              toast.success('Update successfully!', {
                position: 'top-right',
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


    function handleChange (event){
      setCategoryId(event.target.value);

      let subcats = dummysubcategory.filter((value)=>{
        return(value.categoryid==event.target.value)
      })
  
      setSubcategory(subcats);
     
    }

    const handleFileUpload = () => {

    }


  return (
    <>
    <Sidebar/>
    <Navbar/>
    <ToastContainer/>
    <div className="content" style={{ marginTop: "1px" }}>
        <div style={{ paddingTop: "20px" }}>
          <h6 className="mb-4" style={{ marginLeft: "21px" }}>
            EDIT PRODUCT
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
              value={name}
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
              value={description}
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
              value={price}
            />

            <label htmlFor="floatingInput">Price</label>
          </div>

          {/* SELECT CATEGORY STARTS HERE */}

           <div className=" mb-3">
            <label htmlFor="category" className="text-white">
              Select Category
              <select
                className="form-control mt-3"
                style={{ backgroundColor: "black" }}
               
                onChange={handleChange}
               value={categoryId}
                
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

          {/* CATEGORY CONTAINER ENDS */}

          {/* SUB CATEGORY STARTS HERE */}


          <div className=" mb-3">
            <label htmlFor="" className="text-white">
              Select Sub Category
              <select
                className="form-control mt-3"
                style={{ backgroundColor: "black" }}
              onChange={(event)=> {
                  setSubcatId(event.target.value);
              }}
                value={subcatId} 
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
          

          {/* SUB CATEGORY ENDS HERE */}

          {/* IMAGE CONTAINER STARTS HERE */}
          <div className=''>
               <p style={{color: 'white'}} >Edit Image </p>
              <img className='mb-3 mr-3' src={mediaurl+image} height={100} alt="image" style={{borderRadius: '10px'}} />

              <div className="form-floating mb-3 ">
            <input
              type="file"
              className="form-control"
             
              placeholder="Image"
              onChange={(event) => {
                handleFileUpload(event.target.files[0]);
              }}
              
              required
            />

            <label for="floatingInput">Image</label>
          </div>

            
          </div>


          {/* IMAGE CONTAINER ENDS */}

          <div className="form-floating">
            <button
              type="submit"
              className="btn btn-danger mb-5"
              onClick={() => saveProduct()}
            >
              Save Product
            </button>
          </div>
        </div>
      </div>
  </>
  )
}

export default EditProduct