import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { mediaurl } from "./Env";

function RecentBookings() {
  const [bookings, setBookings] = useState([]);
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userdata"))
  );
  const [isHover, setIsHover] = useState(false);
  const [refresh, setRefresh] =useState(0);

  useEffect(() => {
    let param = {
      id: userData.loginid,
    };

    fetch("http://127.0.0.1:8000/api/getbookingsbyvendorid", {
      method: "POST",
      body: JSON.stringify(param),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      response.json().then((data) => {
        setTimeout(() => {
          const bookingsData = data.filter((booking) => {
            return booking.status !== 0;
          });

          setBookings(bookingsData);
          console.log("bk", bookingsData);
        }, 200);
      });
    });
  }, [refresh]);


  const handleMouseEnter = () => {
    setIsHover(true);
 };
 
 const handleMouseLeave = () => {
    setIsHover(false);
 };

 const handleExpire =(id) =>{

  let param ={
    id:id,
    expire:1,

  };


  fetch("http://127.0.0.1:8000/api/changeExpire",{
    method: "POST",
    body: JSON.stringify(param),
    headers : {
        Accept : "application/json",
        "Content-Type" : "application/json",
    },

}).then((response) => {
    response.json().then((data) => {
        toast.success('Status Changed !', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    })
})

setRefresh(refresh+1);



 };

  return (
    <>
      <Sidebar />
      <Navbar />
      <ToastContainer />
      <div className="content">
        <div className="col-sm-12 col-xl-12">
          <div className="bg-secondary rounded h-100 p-4">
            <table className="table">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Subcategory</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings?.map((booking, index) => {
                  return (
                    <tr key={index}>
                      <td>{booking.name}</td>
                      <td>{booking.description}</td>
                      <th>category</th>
                      <th>subcategory</th>
                      <td>
                        <img src={mediaurl + booking.image} height={50} />
                      </td>
                      <td>{booking.price}/-</td>

                      {booking.status == 2 ? (
                        <td style={{ color: "#dc2626" }}>Rejected </td>
                      ) : (
                        <td style={{ color: "green" }}>
                          <h6
                            style={{
                              fontWeight: "normal",
                              fontSize: "14px",
                              color: "#15803d",
                            }}
                          >
                            Accepted
                          </h6>

                          {booking.expire == 1 && (
                            <h6
                              style={{
                                fontWeight: "normal",
                                fontSize: "14px",
                                color: "#4b5563",
                              }}
                            >
                              Service Expired
                            </h6>
                          )}

                          {booking.expire == 0 && (
                            <button
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                              onClick={()=> {handleExpire(booking.id)}}
                              className="expire-button"
                              style={{
                                width: "200px",
                                height: "30px",
                                borderRadius: "10px",
                                backgroundColor: "#4b5563",
                                color: "white",
                                opacity: isHover ? "0.8" : '0.5',
                              }}
                            >
                              Set Service Expired ?
                            </button>
                          )}
                        </td>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecentBookings;
