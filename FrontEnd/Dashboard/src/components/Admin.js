import React from "react";
function Admin(){
    return (
        <div className="content">
        <div className="col-sm-12 col-xl-12">
                        <div className="bg-secondary rounded h-100 p-4">
                            <h6 className="mb-4">LOGIN</h6>
                            
                            <div className="form-floating mb-3">
                                <input type="Email" className="form-control" id="floatingInput"
                                    placeholder="Email ID"/>
                                <label for="floatingInput">Email</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword"
                                    placeholder="Password"/>
                                <label for="floatingPassword">Password</label>
                            </div>
                           
                            <div className="form-floating">
                            <button type="submit" className="btn btn-primary">SIGN IN</button>

                            </div>
                        </div>
                    </div>

</div>
    )
}
export default Admin;