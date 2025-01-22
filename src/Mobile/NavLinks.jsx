import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import avarter from "../assets/avarter.png";

/* eslint-disable react/prop-types */
export const NavLinks = ({ auth, mutate, isPending }) => {
  return (
    <>
      {!auth?.id ? (
        <div className="flex flex-col md:flex-row md:gap-4">
          <Link to="/login" className="text-white hover:text-blue-300">
            Login
          </Link>
          <Link to="/register" className="text-white hover:text-blue-300">
            Register
          </Link>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row md:items-center md:gap-4">
          {auth && (
            <Link
              to="/job-post"
              className="bg-yellow-500 flex items-center gap-2 hover:bg-yellow-600 text-black px-4 py-2 rounded hover:shadow-md transition duration-300"
            >
              <FiEdit /> Post a Job
            </Link>
          )}
          <div className="flex items-center gap-2 ">
            <img
              src={avarter}
              alt="avatar"
              className="h-10 w-10 rounded-full"
            />
            <Link to="/about-user">
              <p className="uppercase text-orange-200 ">{auth?.fullName}</p>
            </Link>
          </div>
          <button
            onClick={() => mutate()}
            disabled={isPending}
            className="text-white  hover:text-blue-300"
          >
            {isPending ? "Loading..." : "Logout"}
          </button>
        </div>
      )}
    </>
  );
};
