import React, { useEffect, useState } from "react";
import AppointmentForm from "../../../Components/AppointmentForm";

const UserDashboardHome = () => {
  const [appointmentData, setAppointmentData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/Appointments")
      .then((res) => res.json())
      .then((data) => setAppointmentData(data));
  }, []);

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

      {appointmentData.map((data, index) => (
        <table className="table">
          <thead>
            <th>Patient Name</th>
            <th>Phone</th>
            <th>Date</th>
            <th>Time</th>
          </thead>
          <tbody>
            <tr>
              <td>{data.name}</td>
              <td>{data.phone}</td>
              <td>{data.appointment_date}</td>
              <td>{data.time}</td>
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
