import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaAddressCard, FaPhone, FaUser } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

const AppointmentForm = ({ isVisible, onClose }) => {
  const { loggedUser } = useContext(AuthContext);
  if (!isVisible) return null;

  const handleBooking = (event) => {};
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
                <div
                  tabIndex={0}
                  role="button"
                  className="btn m-1 pl-8 py-3 rounded-xl w-[100%] bg-[#F0EDFF]"
                >
                  Select Time
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                >
                  <li>
                    <a>Morning 10:00 AM</a>
                  </li>
                  <li>
                    <a>Evening 06:00 PM</a>
                  </li>
                </ul>
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
                  name=""
                  id=""
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2"></div>

            <div>
              <input
                className="text-xl bg-[#bf9b79] px-6 py-2 rounded-md text-white hover:bg-[#dbb28c] hover:text-black mt-5"
                type="submit"
                value="Book Now"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
