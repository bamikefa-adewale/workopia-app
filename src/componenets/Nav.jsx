// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useLogOut } from "../hooks/useLogOut";
import avarter from "../assets/avarter.png";

const Nav = () => {
  const { auth } = useAuth();
  const { mutate, isPending } = useLogOut();
  // console.log("userauth :", auth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-semibold cursor-pointer">
          <Link to="/">Workopia</Link>
        </h1>

        {/* (Visible on Mobile) */}
        <button
          onClick={toggleMenu}
          className="text-white text-2xl md:hidden focus:outline-none"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`absolute top-16 left-0 w-full bg-blue-900 p-4 flex flex-col gap-4 items-center shadow-md md:static md:flex-row md:gap-4 md:p-0 md:shadow-none md:w-auto`}
        >
          {!auth?.id ? (
            <>
              <Link to="/login" className="text-white hover:text-blue-300">
                Login
              </Link>
              <Link to="/register" className="text-white hover:text-blue-300">
                Register
              </Link>
            </>
          ) : (
            <div className="flex  items-center gap-10">
              {auth && (
                <Link
                  to="/job-post"
                  className="bg-yellow-500  flex items-center gap-2 hover:bg-yellow-600 text-black px-4 py-2 rounded           hover:shadow-md transition duration-300"
                >
                  <FiEdit /> Post a Job
                </Link>
              )}

              <div className="flex items-center gap-1">
                <img
                  src={avarter}
                  alt="avarter"
                  className="h-10 w-10 rounded-full"
                />

                <Link to="/about-user">
                  {" "}
                  <p className="uppercase  text-orange-200">
                    {" "}
                    {auth?.fullName}{" "}
                  </p>
                </Link>
              </div>

              <button
                onClick={() => mutate()}
                disabled={isPending}
                className="text-white hover:text-blue-300"
              >
                {isPending ? "Loading..." : " Logout"}
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};
export default Nav;
