

function Navbar() {


  const logout = () => {
    localStorage.clear();
    setTimeout(() => {
        window.location.href='/';
      }, 100);
    

  };
  return (
    <nav className="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0">
      <div className="navbar-brand d-flex d-lg-none me-4">
        <h2 className="text-primary mb-0">
          <i className="fa fa-user-edit"></i>
        </h2>
      </div>
      <div  className="sidebar-toggler flex-shrink-0">
        <i className="fa fa-bars"></i>
      </div>
      <form className="d-none d-md-flex ms-4">
        <input
          className="form-control bg-dark border-0"
          type="search"
          placeholder="Search"
        />
      </form>
      <div className="navbar-nav align-items-center ms-auto">
        <div className="nav-item dropdown">
          <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
            <a href="#" className="dropdown-item">
              <div className="d-flex align-items-center">
                <img
                  className="rounded-circle"
                  src="img/user.jpg"
                  alt=""
                  style={{ width: "40px;", height: "40px;" }}
                />
                <div className="ms-2">
                  <h6 className="fw-normal mb-0">Sree send you a message</h6>
                  <small>15 minutes ago</small>
                </div>
              </div>
            </a>
            <hr className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              <div className="d-flex align-items-center">
                <img
                  className="rounded-circle"
                  src="img/user.jpg"
                  alt=""
                  style={{ width: "40px;", height: " 40px;" }}
                />
                <div className="ms-2">
                  <h6 className="fw-normal mb-0">Sree send you a message</h6>
                  <small>15 minutes ago</small>
                </div>
              </div>
            </a>
            <hr className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              <div className="d-flex align-items-center">
                <img
                  className="rounded-circle"
                  src="img/user.jpg"
                  alt=""
                  style={{ width: "40px;", height: "40px;" }}
                />
                <div className="ms-2">
                  <h6 className="fw-normal mb-0">Sree send you a message</h6>
                  <small>15 minutes ago</small>
                </div>
              </div>
            </a>
            <hr className="dropdown-divider" />
            <a href="#" className="dropdown-item text-center">
              See all message
            </a>
          </div>
        </div>

        <div className="nav-item dropdown">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            <img
              className="rounded-circle me-lg-2"
              src="img/user.jpg"
              alt=""
              style={{ width: "40px;", height: " 40px;" }}
            />
            <span className="d-none d-lg-inline-flex">Sreekutty</span>
          </a>
          <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
            <button
              onClick={() => {
                logout();
              }}
              className="dropdown-item text-white"
            >
              <i class="fa-solid fa-arrow-right-from-bracket"></i> Log Out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
