import React, { useEffect, useState } from "react";
import AppointmentForm from "../../../Components/AppointmentForm";

const UserDashboardHome = () => {
  const [appointmentData, setAppointmentData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [statusId, sethandleStatusId] = useState();

  const Appointments = appointmentData.filter(
    (appointment) =>
      appointment.status !== "Canceled" && appointment.status !== "Completed"
  );

  useEffect(() => {
    fetch("http://localhost:5000/Appointments")
      .then((res) => res.json())
      .then((data) => setAppointmentData(data));
  }, [1]);

  const handleStatus = (event) => {
    event.preventDefault();
    const form = event.target;
    const status = form.element.status.value;

    console.log(status, statusId);
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
                <form onSubmit={handleStatus} action="">
                  <select
                    className="pl-3 py-3 rounded-xl w-[100%] bg-[#F0EDFF]"
                    name="status"
                    id="time"
                    onClick={() => sethandleStatusId(data._id)}
                  >
                    <option defaultValue="Select Time">{data.status}</option>
                    <option value="10:00 AM">Accepted</option>
                    <option value="12:00 PM">Completed</option>
                    <option value="04:00 PM">Canceled</option>
                  </select>
                </form>
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
