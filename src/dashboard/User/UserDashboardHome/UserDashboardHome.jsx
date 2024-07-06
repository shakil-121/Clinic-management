import React, { useEffect, useState } from "react";

const UserDashboardHome = () => {
  const [demoData, setDemoData] = useState([]);

  useEffect(() => {
    fetch("/")
      .then((res) => res.json())
      .then((data) => setDemoData(data));
  }, []);

  return (
    <div className="mt-4">
      <h2 className="text-4xl font-semibold">Welcome to our Clinic</h2>

      {demoData.map((data, index) => (
        <h1>Rabbi Mia</h1>
      ))}
    </div>
  );
};

export default UserDashboardHome;
