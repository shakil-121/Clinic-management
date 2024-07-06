import React, { useContext, useState } from "react";
import { FaLock, FaUser } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const [signInError, setSinginError] = useState("");
  const { signIn } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.code;
        if (errorMessage === "auth/invalid-credential") {
          setSinginError("Invalid Email/Passwprd");
        }
      });
  };

  return (
    <div className="max-w-screen-md m-auto py-24 shadow-lg px-10 rounded-md bg-[#4A36FF] mt-20">
      <form className="text-center w-full" onSubmit={handleLogin} action="">
        <div className="flex items-center">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="pl-8 py-3 rounded-xl w-[100%] bg-[#F0EDFF]"
            required
          />

          <FaUser className="absolute ml-3" />
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
          <p className="bg-white mt-4 text-red-500 px-4">{signInError}</p>
        </div>

        <div>
          <input
            className="text-xl bg-white uppercase px-6 py-2 rounded-md text-black hover:bg-yellow-300 hover:text-black mt-5 font-semibold"
            type="submit"
            value="Login"
          />
        </div>
      </form>
      <div className="flex items-center justify-center gap-3 mt-3 text-white">
        <p>Are You New to Shakil Medical?</p>
        <Link to="/registration" className="text-xl text-white font-semibold">
          Registration
        </Link>
      </div>
    </div>
  );
};

export default Login;
