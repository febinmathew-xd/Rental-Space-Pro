import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { mediaurl } from "./mediaurl";

function Cartaside({deleteCart, ...props}) {
  
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(startDate);
  const [totalDays, setTotalDays] = useState(1);

  const itemPrice = props.obj.price * totalDays;
  const discount = itemPrice * 0.1;
  const gst = itemPrice * 0.15;
  const total = itemPrice - discount + gst;

  useEffect(() => {
    if (startDate != null && endDate != null) {
      // console.log('start',startDate)
      // console.log('end',endDate)

      const date1 = new Date(startDate);
      const date2 = new Date(endDate);
      const diffTime = Math.abs(date2 - date1);
      let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      if (diffDays == 0) {
        diffDays = 1;
      }

      setTotalDays(diffDays);
    }
  }, [endDate, startDate]);

 

  const addBookings = () => {
    let params = {
      productid: props.obj.itemid,
      userid: props.obj.userid,
      startDate: startDate,
      endDate: endDate,
      totalDays: totalDays,
    };

    fetch("http://127.0.0.1:8000/api/addbookings", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-Type": "appliction/json",
      },
      body: JSON.stringify(params),
    }).then((response) => {
      response.json().then((data) => {
        toast.success("Booked successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          className: "toast-red",
        });
      });
    });
  };

  return (
    <>
      <ToastContainer />
      {props.obj && (
        <div className="w-[550px] ml-4 h-[510px]  bg-white relative">
          <div className=" flex justify-between mx-4 pt-12 pb-6 ">
            <img
              className="rounded-lg drop-shadow-md "
              src={mediaurl + props.obj.image}
              alt=""
              width={150}
              height={100}
            />
            <div className="w-[300px]   h-[100px]   bg-fuchsia-400/30  pl-3 pt-3  flex-col justify-around items-center  rounded-lg">
              <div className="relative">
                <h1 className="text-lg font-bold opacity-80  ">
                  {props.obj.name}
                </h1>

                <h4 className="text-sm font-bold opacity-70 ">
                  ₹{props.obj.price} /day
                </h4>

                <h4 className="text-sm font-semibold opacity-50 ">
                  {" "}
                  {props.obj.description}
                </h4>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    deleteCart(props.obj.cartid);
                  }}
                  className="absolute right-1 -top-[55px] text-xs  font-bold border rounded-md px-3 py-1 text-fuchsia-500 hover:text-white/90 hover:bg-fuchsia-500"
                  style={{ outline: "none" }}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div className="flex px-4">
            <div className="flex gap-6 justify-center rounded-lg   items-center py-2 w-2/3 mx-auto">
              <h1 className="font-bold text-sm opacity-80">From:</h1>
              <DatePicker
                dateFormat="dd/MM/yyyy"
                className=" outline-none rounded-lg w-20 text-white/90 bg-fuchsia-500/80 text-center font-semibold text-xs py-1 cursor-pointer"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="flex gap-6 justify-center rounded-lg   items-center py-2 w-2/3 mx-auto">
              <h1 className="font-bold text-sm opacity-80">To:</h1>
              <DatePicker
                dateFormat="dd/MM/yyyy"
                className=" outline-none rounded-lg w-20 text-white/90 bg-fuchsia-500/80 text-center font-semibold text-xs py-1 cursor-pointer"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
              />
            </div>
          </div>

          <div className="flex items-center justify-center mt-3 border mx-56 py-1 rounded-lg">
            <h1 className=" bg-fuchsia-500 text-white rounded text-sm font-semibold px-2 ">
              {totalDays}
            </h1>
            <p className="opacity-80 text-sm font-semibold ml-2">
              {totalDays == 1 ? "Day" : "Days"}
            </p>
          </div>

          <div className="mx-4">
            <hr className="mt-3" />
            <h1 className="font-bold opacity-70 mt-6">Bill Details</h1>
            <div className="flex justify-between mt-4">
              <h3 className="font-semibold text-sm opacity-80">Item Total</h3>
              <p className="font-semibold text-sm">{`₹ ${itemPrice}`}</p>
            </div>

            <div className="flex justify-between mt-2">
              <h3 className="font-semibold text-sm opacity-80">
                Item discount
              </h3>
              <p className="font-semibold text-sm text-green-500">{`- ₹ ${discount}`}</p>
            </div>

            <div className="flex justify-between mt-2">
              <h3 className="font-semibold text-sm opacity-80">GST</h3>
              <p className="font-semibold text-sm">{`₹ ${gst}`}</p>
            </div>
            <hr
              className="mt-4 opacity-50 "
              style={{ borderTop: "1px solid black" }}
            />
            <div className="flex justify-between opacity-90 mt-2">
              <h1 className="font-bold">To PAY</h1>
              <h3 className="font-bold">{`₹${total}`}</h3>
            </div>
            <div className="">
              <button
                onClick={addBookings}
                style={{ outline: "none" }}
                className="bg-fuchsia-600/90 absolute  bottom-1 -left-44 text-white text-xs font-bold px-6 py-2 rounded mt-32 ml-8 mr-5 hover:bg-fuchsia-600/80 drop-shadow-md cursor-pointer "
              >
                CONFIRM
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cartaside;
