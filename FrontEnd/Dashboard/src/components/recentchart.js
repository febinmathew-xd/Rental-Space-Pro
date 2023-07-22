function Recentchart()
{
    return(
        <div className="container-fluid pt-4 px-4">
                <div className="bg-secondary text-center rounded p-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h6 className="mb-0">Tenants Details</h6>
                        <a href="">Show All</a>
                    </div>
                    <div className="table-responsive">
                        <table className="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr className="text-white">
                                    <th scope="col"><input className="form-check-input" type="checkbox"/></th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Invoice</th>
                                    <th scope="col">TenantName</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox"/></td>
                                    <td>01 Jan 2022</td>
                                    <td>INV-0123</td>
                                    <td>Smrithi</td>
                                    <td>123</td>
                                    <td>Paid</td>
                                    <td><a className="btn btn-sm btn-primary" href="">Detail</a></td>
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox"/></td>
                                    <td>01 Jan 2015</td>
                                    <td>INV-0123</td>
                                    <td>Faizal</td>
                                    <td>123</td>
                                    <td>Paid</td>
                                    <td><a className="btn btn-sm btn-primary" href="">Detail</a></td>
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox"/></td>
                                    <td>01 Jan 2020</td>
                                    <td>INV-0123</td>
                                    <td>Sarath</td>
                                    <td>123</td>
                                    <td>Paid</td>
                                    <td><a className="btn btn-sm btn-primary" href="">Detail</a></td>
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox"/></td>
                                    <td>01 Jan 2005</td>
                                    <td>INV-0123</td>
                                    <td>Jyothika</td>
                                    <td>123</td>
                                    <td>Paid</td>
                                    <td><a className="btn btn-sm btn-primary" href="">Detail</a></td>
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox"/></td>
                                    <td>01 Jan 2015</td>
                                    <td>INV-0123</td>
                                    <td>Malu</td>
                                    <td>123</td>
                                    <td>Paid</td>
                                    <td><a className="btn btn-sm btn-primary" href="">Detail</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    )
}
export default Recentchart;