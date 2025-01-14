import React from "react";
import { CustomProfileDetails2 } from "./CustomProfileDetails2";

const CustomProfileDetails = () => {
  return (
    <div>
      <h2 className="text-4xl text-center font-bold mb-4">My Job Listing</h2>
      <div className="">
        <div className="flex justify-between items-center border-b-2 border-gray-100">
          <div className="p-2 ">
            <p className="text-3xl">Software bEngineering</p>{" "}
            <span className="text-gray-500">Part-Time</span>
          </div>
          <div className=" flex gap-5  ">
            <button
              className="py-2 px-6 rounded-md text-white w-full bg-blue-600 
             mt-2"
            >
              Edit
            </button>
            <button
              className="py-2 px-6 rounded-md text-white w-full bg-red-600 
             mt-2"
            >
              Delete
            </button>
          </div>
        </div>
        <div className="bg-slate-100 p-2 mt-3">
          <h4 className="mt-2 mb-4 text-2xl">Applicants</h4>
          <div>
            <h5>
              <span className="text-2xl">Name:</span> bamikefa john
            </h5>
            <h5>
              <span className="text-2xl"> Emai:</span> bamikefa@gmail.com
            </h5>
            <h5>
              <span className="text-2xl"> Number:</span>+2347987747
            </h5>
            <h5>
              <span className="text-2xl"> Message:</span> ready to give my best{" "}
            </h5>
          </div>
        </div>
      </div>
      <CustomProfileDetails2 />
    </div>
  );
};

export default CustomProfileDetails;
