import React, { useEffect, useState } from "react";

const UserDashboardHome = () => {
  const [appointmentData, setAppointmentData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setAppointmentData(data));
  }, []);

  return (
    <div className="mt-4">
      <h2 className="text-4xl font-semibold mb-8">Shakil Medical Clinic</h2>

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
              <td>{data.date}</td>
              <td>{data.appointment_date}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};

export default UserDashboardHome;
