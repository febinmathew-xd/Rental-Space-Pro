import "./App.css";
import Sidebar from "./components/sidebar";
import Admin from "./components/Admin";
import Vendor from "./components/Vendor";
import Edit from "./components/Edit";
import Add from "./components/Add";
import Viewproduct from "./components/Viewproduct";
import View from "./components/View";
import Product from "./components/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditVendor from "./components/EditVendor";
import AddProduct from "./components/AddProduct";
import AddCategory from "./components/AddCategory";
import Category from "./components/Category";
import Editcategory from "./components/Editcategory";
import Subcategory from "./components/Subcategory";
import AddSubcategory from "./components/AddSubcategory";
import EditProduct from "./components/EditProduct";
import Login from "./components/Login";
import RegisterUser from "./components/RegisterUser";
import RegisterVendor from "./components/RegisterVendor";
import Bookings from "./components/Bookings";
import RecentBookings from "./components/RecentBookings";



function App() {
  const usertype = localStorage.getItem("usertype");

  // console.log(usertype)

  return (
    <>
      <BrowserRouter>
        {usertype == 0 ? (
          <Routes>
            <Route exact path="/" element={<Category />} />
            <Route exact path="/admin" element={<Admin />} />
            <Route exact path="/sidebar" element={<Sidebar />} />

            <Route exact path="/Vendor" element={<Vendor />} />
            <Route exact path="/editvendor" element={<EditVendor />} />
            <Route exact path="/edit" element={<Edit />} />
            <Route exact path="/Add" element={<Add />} />
            <Route exact path="/Viewproduct" element={<Viewproduct />} />
            <Route exact path="/View" element={<View />} />

            <Route exact path="/category" element={<Category />} />
            <Route exact path="/addcategory" element={<AddCategory />} />
            <Route exact path="/editcategory" element={<Editcategory />} />

            <Route exact path="/subcategory" element={<Subcategory />} />
            <Route exact path="/addsubcategory" element={<AddSubcategory />} />
            <Route exact path="/editsubcategory" element={<Editcategory />} />

            <Route exact path="/Product" element={<Product />} />
            <Route exact path="/AddProduct" element={<AddProduct />} />
            <Route exact path="/editProduct" element={<EditProduct />} />
          </Routes>
        ) : usertype == 1 ? (
          <Routes>
            <Route exact path="/" element={<Product />} />
            <Route exact path="/AddProduct" element={<AddProduct />} />
            <Route exact path="/editProduct" element={<EditProduct />} />
            <Route exact path="/bookings" element={<Bookings/>} />
            <Route exact path ='/recentbookings' element={<RecentBookings/>} />
          </Routes>
        ) : (
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/userRegister" element={<RegisterUser />} />
            <Route exact path="/vendorRegister" element={<RegisterVendor />} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
