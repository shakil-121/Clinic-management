import React from "react";

const AppointmentForm = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 bg-black  bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
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
          <h1 className="text-2xl text-center font-semibold mb-5">
            {/* {room?.room_name} */}
            Rabbi Mia
          </h1>
          {/* <form
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

              <div className="flex items-center">
                <input
                  type="email"
                  name="email"
                  value={loggedUser?.email}
                  placeholder="Email"
                  className="pl-8 py-3 rounded-xl w-[100%] bg-[#F0EDFF]"
                  required
                />
                <MdMail className="absolute ml-3" />
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
                  type="tel"
                  name="NID"
                  placeholder="NID"
                  className="pl-8 py-3 rounded-xl w-[100%] bg-[#F0EDFF]"
                  required
                />
                <FaAddressCard className="absolute ml-3" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="mt-5">
                <label className="flex font-semibold">FROM</label>
                <input
                  className=" p-4 py-3 rounded-xl w-[100%] bg-[#F0EDFF]"
                  type="date"
                  value={selectedFromDate.toISOString().substring(0, 10)}
                  onChange={handleFromDataChange}
                  required
                />
              </div>
              <div className="mt-5">
                <label className="flex font-semibold">TO</label>
                <input
                  className=" p-4 py-3 rounded-xl w-[100%] bg-[#F0EDFF]"
                  type="date"
                  value={selectedToDate.toISOString().substring(0, 10)}
                  onChange={handleToDataChange}
                  required
                />
              </div>
            </div>

            <div>
              <input
                className="text-xl bg-[#bf9b79] px-6 py-2 rounded-md text-white hover:bg-[#dbb28c] hover:text-black mt-5"
                type="submit"
                value="Book Now"
              />
            </div>
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
