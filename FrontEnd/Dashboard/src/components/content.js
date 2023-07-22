function Content(){
    return(
        <div className="content">
        <nav className="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0">
                <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
                    <h2 className="text-primary mb-0"><i className="fa fa-user-edit"></i></h2>
                </a>
                <a href="#" className="sidebar-toggler flex-shrink-0">
                    <i className="fa fa-bars"></i>
                </a>
                <form className="d-none d-md-flex ms-4">
                    <input className="form-control bg-dark border-0" type="search" placeholder="Search"/>
                </form>
                <div className="navbar-nav align-items-center ms-auto">
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <i className="fa fa-envelope me-lg-2"></i>
                            <span className="d-none d-lg-inline-flex">Message</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                            <a href="#" className="dropdown-item">
                                <div className="d-flex align-items-center">
                                    <img className="rounded-circle" src="img/user.jpg" alt="" style={{width: '40px;', height: '40px;'}}/>
                                    <div className="ms-2">
                                        <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </a>
                            <hr className="dropdown-divider"/>
                            <a href="#" className="dropdown-item">
                                <div className="d-flex align-items-center">
                                    <img className="rounded-circle" src="img/user.jpg" alt="" style={{width: '40px;', height:' 40px;'}}/>
                                    <div className="ms-2">
                                        <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </a>
                            <hr className="dropdown-divider"/>
                            <a href="#" className="dropdown-item">
                                <div className="d-flex align-items-center">
                                    <img className="rounded-circle" src="img/user.jpg" alt="" style={{width: '40px;', height: '40px;'}}/>
                                    <div className="ms-2">
                                        <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </a>
                            <hr className="dropdown-divider"/>
                            <a href="#" className="dropdown-item text-center">See all message</a>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <i className="fa fa-bell me-lg-2"></i>
                            <span className="d-none d-lg-inline-flex">Notificatin</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                            <a href="#" className="dropdown-item">
                                <h6 className="fw-normal mb-0">Profile updated</h6>
                                <small>15 minutes ago</small>
                            </a>
                            <hr className="dropdown-divider"/>
                            <a href="#" className="dropdown-item">
                                <h6 className="fw-normal mb-0">New user added</h6>
                                <small>15 minutes ago</small>
                            </a>
                            <hr className="dropdown-divider"/>
                            <a href="#" className="dropdown-item">
                                <h6 className="fw-normal mb-0">Password changed</h6>
                                <small>15 minutes ago</small>
                            </a>
                            <hr className="dropdown-divider"/>
                            <a href="#" className="dropdown-item text-center">See all notifications</a>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <img className="rounded-circle me-lg-2" src="img/user.jpg" alt="" style={{width: '40px;',height:' 40px;'}}/>
                            <span className="d-none d-lg-inline-flex">Sreekutty</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                            <a href="#" className="dropdown-item">My Profile</a>
                            <a href="#" className="dropdown-item">Settings</a>
                            <a href="#" className="dropdown-item">Log Out</a>
                        </div>
                    </div>
                </div>
            </nav>

        <div className="container-fluid pt-4 px-4">
            <div className="row g-4">
                <div className="col-sm-6 col-xl-3">
                    <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                        <i className="fa fa-chart-line fa-3x text-primary"></i>
                        <div className="ms-3">
                            <p className="mb-2">Events Decorations</p>
                            <h6 className="mb-0">$1234</h6>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                    <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                        <i className="fa fa-chart-bar fa-3x text-primary"></i>
                        <div className="ms-3">
                            <p className="mb-2">Event Accessories</p>
                            <h6 className="mb-0">$1234</h6>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                    <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                        <i className="fa fa-chart-area fa-3x text-primary"></i>
                        <div className="ms-3">
                            <p className="mb-2">Buying</p>
                            <h6 className="mb-0">$1234</h6>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                    <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                        <i className="fa fa-chart-pie fa-3x text-primary"></i>
                        <div className="ms-3">
                            <p className="mb-2">Selling</p>
                            <h6 className="mb-0">$1234</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div className="container-fluid pt-4 px-4">
            <div className="row g-4">
                <div className="col-sm-12 col-xl-6">
                    <div className="bg-secondary text-center rounded p-4">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <h6 className="mb-0">Worldwide Sales</h6>
                            <a href="">Show All</a>
                        </div>
                        <canvas id="worldwide-sales"></canvas>
                    </div>
                </div>
                <div className="col-sm-12 col-xl-6">
                    <div className="bg-secondary text-center rounded p-4">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <h6 className="mb-0">Salse & Revenue</h6>
                            <a href="">Show All</a>
                        </div>
                        <canvas id="salse-revenue"></canvas>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="container-fluid pt-4 px-4">
            <div className="bg-secondary text-center rounded p-4">
                <div className="d-flex align-items-center justify-content-between mb-4">
                    <h6 className="mb-0">Recent Salse</h6>
                    <a href="">Show All</a>
                </div>
                <div className="table-responsive">
                    <table className="table text-start align-middle table-bordered table-hover mb-0">
                        <thead>
                            <tr className="text-white">
                                <th scope="col"><input className="form-check-input" type="checkbox"/></th>
                                <th scope="col">Date</th>
                                <th scope="col">Invoice</th>
                                <th scope="col">Customer</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input className="form-check-input" type="checkbox"/></td>
                                <td>01 Jan 2045</td>
                                <td>INV-0123</td>
                                <td>Bhagya</td>
                                <td>$123</td>
                                <td>Paid</td>
                                <td><a className="btn btn-sm btn-primary" href="">Detail</a></td>
                            </tr>
                            <tr>
                                <td><input className="form-check-input" type="checkbox"/></td>
                                <td>01 Jan 2045</td>
                                <td>INV-0123</td>
                                <td>Deepthi</td>
                                <td>$123</td>
                                <td>Paid</td>
                                <td><a className="btn btn-sm btn-primary" href="">Detail</a></td>
                            </tr>
                            <tr>
                                <td><input className="form-check-input" type="checkbox"/></td>
                                <td>01 Jan 2045</td>
                                <td>INV-0123</td>
                                <td>Lekshmi</td>
                                <td>$123</td>
                                <td>Paid</td>
                                <td><a className="btn btn-sm btn-primary" href="">Detail</a></td>
                            </tr>
                            <tr>
                                <td><input className="form-check-input" type="checkbox"/></td>
                                <td>01 Jan 2045</td>
                                <td>INV-0123</td>
                                <td>Sreekutty</td>
                                <td>$123</td>
                                <td>Paid</td>
                                <td><a className="btn btn-sm btn-primary" href="">Detail</a></td>
                            </tr>
                            <tr>
                                <td><input className="form-check-input" type="checkbox"/></td>
                                <td>01 Jan 2045</td>
                                <td>INV-0123</td>
                                <td>Jhon Doe</td>
                                <td>$123</td>
                                <td>Paid</td>
                                <td><a className="btn btn-sm btn-primary" href="">Detail</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div className="container-fluid pt-4 px-4">
            <div className="row g-4">
                <div className="col-sm-12 col-md-6 col-xl-4">
                    <div className="h-100 bg-secondary rounded p-4">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                            <h6 className="mb-0">Messages</h6>
                            <a href="">Show All</a>
                        </div>
                        <div className="d-flex align-items-center border-bottom py-3">
                            <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style={{width: '40px;', height: '40px;'}}/>
                            <div className="w-100 ms-3">
                                <div className="d-flex w-100 justify-content-between">
                                    <h6 className="mb-0">Jhon Doe</h6>
                                    <small>15 minutes ago</small>
                                </div>
                                <span>Short message goes here...</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center border-bottom py-3">
                            <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style={{width: '40px;', height: '40px;'}}/>
                            <div className="w-100 ms-3">
                                <div className="d-flex w-100 justify-content-between">
                                    <h6 className="mb-0">Jhon Doe</h6>
                                    <small>15 minutes ago</small>
                                </div>
                                <span>Short message goes here...</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center border-bottom py-3">
                            <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style={{width: '40px;',height: '40px;'}}/>
                            <div className="w-100 ms-3">
                                <div className="d-flex w-100 justify-content-between">
                                    <h6 className="mb-0">Jhon Doe</h6>
                                    <small>15 minutes ago</small>
                                </div>
                                <span>Short message goes here...</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center pt-3">
                            <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style={{width: '40px;', height: '40px;'}}/>
                            <div className="w-100 ms-3">
                                <div className="d-flex w-100 justify-content-between">
                                    <h6 className="mb-0">Jhon Doe</h6>
                                    <small>15 minutes ago</small>
                                </div>
                                <span>Short message goes here...</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-xl-4">
                    <div className="h-100 bg-secondary rounded p-4">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <h6 className="mb-0">Calender</h6>
                            <a href="">Show All</a>
                        </div>
                        <div id="calender"></div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-xl-4">
                    <div className="h-100 bg-secondary rounded p-4">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <h6 className="mb-0">To Do List</h6>
                            <a href="">Show All</a>
                        </div>
                        <div className="d-flex mb-2">
                            <input className="form-control bg-dark border-0" type="text" placeholder="Enter task"/>
                            <button type="button" className="btn btn-primary ms-2">Add</button>
                        </div>
                        <div className="d-flex align-items-center border-bottom py-2">
                            <input className="form-check-input m-0" type="checkbox"/>
                            <div className="w-100 ms-3">
                                <div className="d-flex w-100 align-items-center justify-content-between">
                                    <span>Short task goes here...</span>
                                    <button className="btn btn-sm"><i className="fa fa-times"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center border-bottom py-2">
                            <input className="form-check-input m-0" type="checkbox"/>
                            <div className="w-100 ms-3">
                                <div className="d-flex w-100 align-items-center justify-content-between">
                                    <span>Short task goes here...</span>
                                    <button className="btn btn-sm"><i className="fa fa-times"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center border-bottom py-2">
                            <input className="form-check-input m-0" type="checkbox" checked/>
                            <div className="w-100 ms-3">
                                <div className="d-flex w-100 align-items-center justify-content-between">
                                    <span><del>Short task goes here...</del></span>
                                    <button className="btn btn-sm text-primary"><i className="fa fa-times"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center border-bottom py-2">
                            <input className="form-check-input m-0" type="checkbox"/>
                            <div className="w-100 ms-3">
                                <div className="d-flex w-100 align-items-center justify-content-between">
                                    <span>Short task goes here...</span>
                                    <button className="btn btn-sm"><i className="fa fa-times"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center pt-2">
                            <input className="form-check-input m-0" type="checkbox"/>
                            <div className="w-100 ms-3">
                                <div className="d-flex w-100 align-items-center justify-content-between">
                                    <span>Short task goes here...</span>
                                    <button className="btn btn-sm"><i className="fa fa-times"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="container-fluid pt-4 px-4">
            <div className="bg-secondary rounded-top p-4">
                <div className="row">
                    <div className="col-12 col-sm-6 text-center text-sm-start">
                        &copy; <a href="#">Your Site Name</a>, All Right Reserved. 
                    </div>
                    <div className="col-12 col-sm-6 text-center text-sm-end">
                        Designed By <a href="https://htmlcodex.com">HTML Codex</a>
                        <br/>Distributed By: <a href="https://themewagon.com" target="_blank">ThemeWagon</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Content;