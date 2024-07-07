import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../authProvider/AuthProvider";
import { FaUserTie } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const DashboardSidebar = () => {
  const [appointmentData, setAppointmentData] = useState([]);
  const { logOut, loggedUser } = useContext(AuthContext);
  console.log(loggedUser);

  const role = appointmentData.role;

  useEffect(() => {
    fetch(`http://localhost:5000/Appointments/${loggedUser?.email}`)
      .then((res) => res.json())
      .then((data) => setAppointmentData(data));
  }, []);

  return (
    <div className="h-full">
      <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        <div className="mb-8">
          <div className="text-6xl m-auto flex justify-center items-center bg-white w-32 h-32 rounded-full shadow-lg">
            <FaUserTie />
          </div>
          <p className="text-center text-2xl font-semibold mt-4">
            {loggedUser?.displayName}
          </p>
        </div>

        {role === "patient" ? (
          <>
            <li>
              <Link to="/dashboard">Patient</Link>
            </li>
            <li>
              <Link to="userHistory">History</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="adminDashboard">Appointment</Link>
            </li>

            <li>
              <Link to="history">Ad_History</Link>
            </li>
          </>
        )}

        <li>
          <Link
            onClick={() => {
              logOut();
            }}
          >
            LogOut
          </Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

export default DashboardSidebar;
