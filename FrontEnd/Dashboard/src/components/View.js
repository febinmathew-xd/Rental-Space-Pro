import React from "react";
function View()
{
    return(
        <>
    {/*<div className="content">  
        <div className="col-sm-12 col-xl-12">
                        <div className="bg-secondary rounded h-100 p-4">
                            <div className="form-floating mb-3">
                                <input type="Name" className="form-control" id="floatingInput"
                                    placeholder="Name"/>
                                <label for="floatingInput">Product Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="Address" className="form-control" id="floatingInput"
                                    placeholder="Address"/>
                                <label for="floatingInput">Vendor Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="Contact Number" className="form-control" id="floatingInput"
                                    placeholder="Contact Number"/>
                                <label for="floatingInput">Product Price</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="Email" className="form-control" id="floatingInput"
                                    placeholder="Email ID"/>
                                <label for="floatingInput">Image</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="Email" className="form-control" id="floatingInput"
                                    placeholder="Email ID"/>
                                <label for="floatingInput">Description</label>
                            </div>
                        <div className="form-floating">
                            <button type="Save" className="btn btn-primary" style={{backgroundColor:'#16aeeb'}}>Save</button>
                        </div>
                        </div>
                        </div>
    </div>*/}
     <table className="table">
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Vendor Name</th>
                                    <th>Product Price</th>
                                    <th>Image</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Chair</td>
                                    <td>Sai</td>
                                    <td>450</td>
                                    <td>img</td>
                                    <td>it is strong and super look</td>
                                    <td>
                    
                                        
                    
                                    </td>
                                </tr>
                            </tbody>
                        </table>
        </>
    )
}
export default View;