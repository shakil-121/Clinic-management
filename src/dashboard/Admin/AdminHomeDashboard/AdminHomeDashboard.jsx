import React, { useEffect, useState } from "react";
import AppointmentForm from "../../../Components/AppointmentForm";

const AdminHomeDashboard = () => {
  const [appointmentData, setAppointmentData] = useState([]);
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

  const [appointmentId, setAppointmentId] = useState();

  const handleBookClick = (id) => {
    setAppointmentId(id);
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
              <td>
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
                      <a>Completed</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};

export default AdminHomeDashboard;
