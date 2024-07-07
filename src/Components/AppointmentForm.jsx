import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaAddressCard, FaPhone, FaUser } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

const AppointmentForm = ({ isVisible, onClose }) => {
  const { loggedUser } = useContext(AuthContext);
  if (!isVisible) return null;

  const userEmail = loggedUser?.email;

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.elements.name.value;
    const phone = form.elements.phone.value;
    const time = form.elements.time.value;
    const date = form.elements.date.value;

    const appointmentData = {
      name: name,
      phone: phone,
      time: time,
      date: date,
      userEmail: userEmail,
      status: "Pending",
    };

    fetch("http://localhost:5000/appointment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointmentData),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Booking Confirmed",
          text: "Welcome to the Hotel Relax",
          icon: "success",
        });
        form.reset();
      });
  };

  return (
    <div className="fixed inset-0 bg-black  bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-20">
      <div className=" flex flex-col">
        <button
          onClick={() => onClose()}
          className="btn btn-circle btn-outline border-black text-red-500 place-self-end"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="bg-gray-300 py-14 px-10 rounded-lg">
          <h1 className="text-2xl text-center font-semibold mb-5"></h1>
          <form
            className="text-center w-full"
            onSubmit={handleBooking}
            action=""
          >
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <input
                  type="text"
                  name="name"
                  defaultValue={loggedUser?.displayName}
                  placeholder="Enter Name"
                  className="pl-8 py-3 rounded-xl w-[100%] bg-[#F0EDFF]"
                  required
                />
                <FaUser className="absolute ml-3" />
              </div>

              <div className="dropdown">
                <select
                  className="pl-8 py-3 rounded-xl w-[100%] bg-[#F0EDFF]"
                  name="time"
                  id="time"
                >
                  <option defaultValue="Select Time">Select Time</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="04:00 PM">04:00 PM</option>
                  <option value="07:00 PM">07:00 PM</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-8">
              <div className="flex items-center">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="pl-8 py-3 rounded-xl w-[100%] bg-[#F0EDFF]"
                  required
                />
                <FaPhone className="absolute ml-3" />
              </div>
              <div className="flex items-center">
                <input
                  className="pl-8 py-3 rounded-xl w-[100%] bg-[#F0EDFF]"
                  type="date"
                  name="date"
                  id=""
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2"></div>

            <div>
              <input
                className="text-xl bg-[#4a36ff] px-6 py-2 rounded-md text-white hover:bg-[#3c28ee] hover:text-white mt-5"
                type="submit"
                value="Book Now"
              />
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AppointmentForm;
