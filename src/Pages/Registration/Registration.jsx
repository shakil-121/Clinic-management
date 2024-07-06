import React, { useContext, useState } from "react";
import { FaLock, FaPhone, FaUser } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { Link, useLocation, useNavigation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Registration = () => {
  const [registrationError, setRegistrationError] = useState("");
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigation();
  const from = location.state?.from?.pathname || "/login";

  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const password = form.password.value;

    const userInfo = {
      name: name,
      email: email,
      phone: phone,
      role: "patient",
    };

    createUser(email, password).then((result) => {
      const loggedUser = result.user;
      updateUserProfile(name);
      console.log(loggedUser);
      form.reset();
      navigate(from, { replace: true });
    });
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    }).catch((error) => {
      const errorCode = error.code;

      if (errorCode === "auth/weak-password") {
        setRegistrationError(
          "Password is too weak. Please Provide a strong password"
        );
      }

      if (errorCode === "auth/email-already-in-use") {
        setRegistrationError(
          "Email is already used. please provide a new email address."
        );
      }
    });
  };
  return (
    <div className="max-w-screen-md m-auto">
      <div className="bg-[#4A36FF] rounded-3xl py-20 border">
        <h1 className="text-4xl text-center mb-6 text-white">
          Registration Form
        </h1>
        <p className="text-xl text-center mb-5 text-white">
          How to i get started with Shakil Medical
        </p>

        {/* this is the form section */}
        <div className="flex items-center justify-center px-5 md:px-24">
          <form
            className="text-center w-full"
            onSubmit={handleRegistration}
            action=""
          >
            <div className="flex items-center">
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                className="pl-8 py-3 rounded-xl w-[100%] bg-[#F0EDFF]"
                required
              />
              <FaUser className="absolute ml-3" />
            </div>

            <div className="flex items-center mt-5">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="pl-8 py-3 rounded-xl w-[100%] bg-[#F0EDFF]"
                required
              />
              <MdMail className="absolute ml-3" />
            </div>
            <div className="flex items-center mt-5">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="pl-8 py-3 rounded-xl w-[100%] bg-[#F0EDFF]"
                required
              />
              <FaPhone className="absolute ml-3" />
            </div>
            <div className="flex items-center mt-5">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="pl-8 py-3 rounded-xl w-[100%] bg-[#F0EDFF]"
                required
              />
              <FaLock className="absolute ml-3" />
            </div>

            <div className="flex justify-center">
              <p className="text-[#DE3F3F] bg-white mt-3 px-4">
                {/* {registrationError} */}
              </p>
            </div>

            <div>
              <input
                className="text-xl bg-white px-6 py-2 rounded-md text-black hover:bg-yellow-300 hover:text-black mt-5"
                type="submit"
                value="Registration"
              />
            </div>
          </form>
        </div>

        <div className="grid grid-cols-3 justify-center items-center mt-8">
          <hr className="border-white" />
          <p className="text-xl text-white text-center font-bold">
            Already Have An Account
          </p>
          <hr className="border-white" />
        </div>
        {/* Google Login and Another */}
        <div className="flex justify-center">
          <Link
            to="/login"
            className="text-2xl font-semibold bg-white px-6 py-2 rounded-md mt-4"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
