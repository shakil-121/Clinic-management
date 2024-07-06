import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/shakil medical clinic.png";
import { FaCircleChevronRight } from "react-icons/fa6";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navber = () => {
  const { loggedUser } = useContext(AuthContext);
  return (
    <div class="navbar bg-base-100 px-16">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Parent</a>
              <ul class="p-2">
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <Link class="text-xl">
          <img className="h-16" src={logo} alt="Shakil Medical Clinic" />
        </Link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li>
            <a>About</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul class="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        {loggedUser ? (
          <>
            <Link to="dashboard">
              <button className="px-8  py-2  rounded-3xl bg-[#4a36ff] border-none text-white uppercase">
                <span className="flex items-center">
                  Dashboard
                  <FaCircleChevronRight />
                </span>
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link to="login">
              <button className="px-8  py-2  rounded-3xl bg-[#4a36ff] border-none text-white uppercase">
                <span className="flex items-center">
                  Login
                  <FaCircleChevronRight />
                </span>
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navber;
