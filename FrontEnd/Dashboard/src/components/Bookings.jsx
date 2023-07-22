import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import Sidebar from './sidebar';
import { mediaurl } from './Env';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Bookings() {

    const [bookings, setBookings] = useState([]);
    const [dummyBookings, setDummyBookings] = useState([]);
    const[userData, setUserData] = useState(JSON.parse(localStorage.getItem("userdata")));
    const [refresh, setRefresh] = useState(0);
    console.log("userdata", userData);
   useEffect(() => {

    let param = {
        id:userData.loginid,
    }

    fetch("http://127.0.0.1:8000/api/getbookingsbyvendorid", {
        method: "POST",
        body: JSON.stringify(param),
        headers: {
            Accept: "application/json",
            "Content-Type" : "application/json",
        },

    }).then((response)=> {
        response.json().then((data) => {
            setDummyBookings(data);
          
            setTimeout(() => {
              const bookingsData = data.filter((booking) => { 
           
                return(booking.status==0);
              })
            
          
              setBookings(bookingsData);
              
            }, 200);



        })
    })



   },[refresh]);

const acceptBooking = (id) => {
    
   let param = {
        id:id,
        status:1,
    }

    fetch("http://127.0.0.1:8000/api/acceptbooking",{
        method: "POST",
        body: JSON.stringify(param),
        headers : {
            Accept : "application/json",
            "Content-Type" : "application/json",
        },

    }).then((response) => {
        response.json().then((data) => {
            toast.success('Accepted !', {
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



const rejectBooking = (id) => {
    
   let param = {
        id:id,
        status:2,
    }

    fetch("http://127.0.0.1:8000/api/rejectbooking",{
        method: "POST",
        body: JSON.stringify(param),
        headers : {
            Accept : "application/json",
            "Content-Type" : "application/json",
        },

    }).then((response) => {
        response.json().then((data) => {
            toast.error('Rejected !', {
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
    <Sidebar/>
    <Navbar/>
    <ToastContainer/>
    <div className="content">
      <div className="col-sm-12 col-xl-12">
        <div className="bg-secondary rounded h-100 p-4">
          
        

          <table className="table">
            <thead>
              <tr>
                <th>Booking Id</th>
                <th>Product Name</th>
                <th>User</th>
                {/* <th>Phone</th> */}
                <th>From</th>
                <th>To</th>
                <th>Total Days</th>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              
               {
                  bookings.map((booking,index) =>{

                    
                  
                    return(
                        <tr >
                    <td>{index+1}</td>
                    <td>{booking.name}</td>
                    <td>{booking.description}</td>
                    <td>{booking.startDate}</td>
                    <td>{booking.endDate}</td>
                    <td>{booking.totalDays}</td>
                    <td> <img src={mediaurl+booking.image} height={50}/></td>
                    <td>₹{booking.price}/-</td>
                    <td>
                        <button onClick={(e)=> {acceptBooking(booking.id)}} className="btn btn-success" style={{ marginRight: 12 }} >Accept</button>
                         <button onClick={(e) => {rejectBooking(booking.id)}} className="btn btn-danger ml-2" >Reject</button>
                    </td>
                  </tr>
                

                    )


                  })

               } 
                
                  
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </>
  )
            }

export default Bookings