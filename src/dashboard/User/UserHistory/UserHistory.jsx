import React, { useEffect, useState } from "react";
import AppointmentForm from "../../../Components/AppointmentForm";

const UserHistory = () => {
  const [appointmentData, setAppointmentData] = useState([]);
  const [statusId, sethandleStatusId] = useState();

  const Appointments = appointmentData.filter(
    (appointment) =>
      appointment.status !== "Confirmed" && appointment.status !== "Pending"
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
        <h2 className="text-4xl font-semibold">Previous Appointment History</h2>
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
              <td>{data.status}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};

export default UserHistory;
