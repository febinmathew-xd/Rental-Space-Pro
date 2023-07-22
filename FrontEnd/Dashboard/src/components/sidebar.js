import { Link,NavLink } from "react-router-dom";

function Sidebar() {
  const usertype = localStorage.getItem("usertype");
 

  return (
    <div className="sidebar pe-4 pb-3">
      <nav className="navbar bg-secondary navbar-dark">
        <a href="index.html" className="navbar-brand mx-4 mb-3">
          <h3 className="text-primary">
            <i className="fa fa-user-edit me-2"></i>RentalSpace
          </h3>
        </a>
        <div className="d-flex align-items-center ms-4 mb-4">
          <div className="position-relative">
            <img
              className="rounded-circle"
              src="img/user.jpg"
              alt=""
              style={{ width: "40px", height: "40px" }}
            />
            <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
          </div>
          <div className="ms-3">
            <h6 className="mb-0">Sreekutty</h6>
            <span>Admin</span>
          </div>
        </div>
        <div className="navbar-nav w-100">
          {usertype == 0 ? (
            <>
              <NavLink activeclassname='active' to="/category" className="nav-item nav-link">
                <i class="fa-solid fa-list"></i>Category
              </NavLink>

              <NavLink to="/subcategory" className="nav-item nav-link ">
                <i class="fa-solid fa-list-check"></i>Subcategory
              </NavLink>

              <NavLink to="/Vendor" className="nav-item nav-link ">
                <i class="fa-solid fa-list-check"></i>Vendors
              </NavLink>
            </>
          ) : (
            <>
            <NavLink to="/" className="nav-item nav-link ">
            <i class="fa-solid fa-list-check"></i>Products
          </NavLink>

            <NavLink to="/bookings" className="nav-item nav-link ">
            <i class="fa-solid fa-list-check"></i>Bookings
          </NavLink>

            <NavLink to="/recentbookings" className="nav-item nav-link ">
            <i class="fa-solid fa-list-check"></i>Recent Bookings
          </NavLink>
          </>
            
          )}
        </div>
      </nav>
    </div>
  );
}
export default Sidebar;
