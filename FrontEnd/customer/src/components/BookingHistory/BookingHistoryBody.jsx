import React, { useEffect, useState } from "react";
import { mediaurl } from "../mediaurl";

function BookingHistoryBody() {
  const [bookings, setBookings] = useState([]);
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userdata"))
  );

  useEffect(() => {
    let param = {
      id: userData.loginid,
    };

    fetch("http://127.0.0.1:8000/api/getbookingsbyuserid", {
      method: "POST",
      body: JSON.stringify(param),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    }).then((response) => {
      response.json().then((data) => {
        setBookings(data);
        // console.log(data);
      });
    });
  }, []);

  return (
    <div className="w-full h-screen bg-white">
      <hr />
      <div className="w-full  h-full bg-gray-400/30 mt-20 pt-20 overflow-y-scroll">
        <div className="w-3/4  mx-auto mb-4">
          <h1 className="font-bold text-xl opacity-80">Past Bookings</h1>
        </div>

        {bookings.map((booking) => {
           
          return (
            <div className="bg-white h-[200px] w-3/4 mx-auto mb-6 rounded ">
              <div className="flex justify-between h-full items-center px-12 ">
                <img
                  src={mediaurl+booking.image}
                  width={150}
                  alt=""
                  className="rounded-lg mt-4 "
                />
                <div>
                <h1 className="font-bold opacity-80">Booking Id: {booking.id}</h1>
                  <h1 className="font-bold opacity-80">{booking.name}</h1>
                  <h1 className="font-semibold text-sm opacity-80">
                    {booking.description}
                  </h1>
                  <h1 className="font-bold opacity-80">{booking.vendorname}</h1>
                </div>
                <div>
                  <h1 className="font-bold opacity-80">
                    From:{" "}
                    <span className=" font-semibold bg-fuchsia-500 text-white rounded px-2 text-sm">
                      {booking.startDate}
                    </span>
                  </h1>
                  <h1 className="font-bold mt-2 opacity-80">
                    To:{" "}
                    <span className=" font-semibold bg-fuchsia-500 text-white rounded px-2 ml-3  text-sm">
                      {booking.endDate}
                    </span>
                  </h1>
                  <h1 className="font-bold mt-2 opacity-80">
                    Total Days:{" "}
                    <span className="text-white  bg-fuchsia-500 rounded font-semibold text-sm px-1">
                      {booking.totalDays}{" "}
                    </span>
                    Days
                  </h1>
                </div>
                <div>
                  <h1 className="font-bold opacity-80">
                    Total Bill Amount: <br /> ₹ {booking.price}(Pay on Time)
                  </h1>
                </div>
                <div className="">
                  <h1 className="font-bold ">Status</h1>
                  {booking.status == 0 ? (
                    <>
                      <div className="flex">
                        <h2 className="font-bold text-sm text-amber-500">
                          Pending
                        </h2>
                        <i class="fa-solid fa-triangle-exclamation text-amber-500 ml-4"></i>
                      </div>
                    </>
                  ) : booking.status == 1 ? (
                    <>
                      <div className="flex">
                        <h2 className="font-bold text-sm text-green-600/80">
                          Confirmed
                        </h2>
                        <i className="fa-solid fa-circle-check ml-4 text-fuchsia-600/90"></i>
                      </div>
                    </>
                  ) : booking.status == 2 ? (
                    <>
                      <div className="flex">
                        <h2 className="font-bold text-sm text-red-600">
                          Rejected
                        </h2>
                        <i class="fa-solid fa-circle-xmark text-red-600 ml-4"></i>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BookingHistoryBody;
