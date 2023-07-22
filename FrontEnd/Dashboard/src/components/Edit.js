import React from "react";
function Edit()
{
    return(
        <>
    <div className="content">  
        <div className="col-sm-12 col-xl-12">
                        <div className="bg-secondary rounded h-100 p-4">
                            <div className="form-floating mb-3">
                                <input type="Name" className="form-control" id="floatingInput"
                                    placeholder="Name"/>
                                <label for="floatingInput">Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="Address" className="form-control" id="floatingInput"
                                    placeholder="Address"/>
                                <label for="floatingInput">Address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="Contact Number" className="form-control" id="floatingInput"
                                    placeholder="Contact Number"/>
                                <label for="floatingInput">Phone Number</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="Email" className="form-control" id="floatingInput"
                                    placeholder="Email ID"/>
                                <label for="floatingInput">Email</label>
                            </div>
                        <div className="form-floating">
                            <button type="Save" className="btn btn-primary" style={{backgroundColor:'#16aeeb'}}>Save</button>
                        </div>
                        </div>
                        </div>
        </div>
        </>
    )
}
export default Edit;