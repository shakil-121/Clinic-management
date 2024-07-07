import React, { useEffect, useState } from "react";
import AppointmentForm from "../../../Components/AppointmentForm";

const UserDashboardHome = () => {
  const [appointmentData, setAppointmentData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [appointmentId, setAppointmentId] = useState(null);

  const Appointments = appointmentData.filter(
    (appointment) =>
      appointment.status !== "Canceled" && appointment.status !== "Completed"
  );

  useEffect(() => {
    fetch("http://localhost:5000/Appointments")
      .then((res) => res.json())
      .then((data) => setAppointmentData(data));
  }, [1]);

  const handleBookClick = (id) => {
    setAppointmentId(id); // Set roomId on button click
  };

  const handleStatusUpdate = (status, id) => {
    console.log(status, id);
    const statusUpdate = { status };

    fetch(`http://localhost:5000/Appointments/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(statusUpdate),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            title: "Update!",
            text: "Status update successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
        refetch();
      });
  };

  return (
    <div className="mt-4">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-semibold">Shakil Medical Clinic</h2>
        <div>
          <button
            onClick={() => setShowModal(true)} // Pass room_id to handleBookClick
            className="bg-[#4a36ff] text-white text-xl py-4 px-6 rounded-full hover:bg-lime-500"
          >
            Make Appointment
          </button>
        </div>
      </div>

      {Appointments.map((data, index) => (
        <table className="table">
          <thead>
            <th>Patient Name</th>
            <th>Phone</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
          </thead>
          <tbody>
            <tr>
              <td>{data.name}</td>
              <td>{data.phone}</td>
              <td>{data.date}</td>
              <td>{data.time}</td>
              <td>
                {/* <select
                  className="pl-3 py-3 rounded-xl w-[100%] bg-[#F0EDFF]"
                  name="status"
                  id="time"
                  onClick={() => sethandleStatusId(data._id)}
                >
                  <option defaultValue="Select Time">{data.status}</option>
                  <option value="10:00 AM">Accepted</option>
                  <option value="12:00 PM">Completed</option>
                  <option value="04:00 PM">Canceled</option>
                </select> */}

                <div className="dropdown dropdown-bottom text-black">
                  <label tabIndex={0} className="">
                    <button className="btn btn-error">{data.status}</button>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100  w-48"
                  >
                    <li onClick={() => handleStatusUpdate("Pending", data._id)}>
                      <a>Pending</a>
                    </li>
                    <li
                      onClick={() => handleStatusUpdate("Confirmed", data._id)}
                    >
                      <a>Confirmed</a>
                    </li>
                    <li
                      onClick={() => handleStatusUpdate("Canceled", data._id)}
                    >
                      <a>Canceled</a>
                    </li>
                    <li
                      onClick={() => handleStatusUpdate("Completed", data._id)}
                    >
                      <a>Checked-In</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      ))}

      <AppointmentForm
        isVisible={showModal}
        onClose={() => setShowModal(false)}
      ></AppointmentForm>
    </div>
  );
};

export default UserDashboardHome;
