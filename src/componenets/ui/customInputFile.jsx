import React from "react";

const CustomInputFile = ({ label, register, error, accept, className }) => {
  return (
    <>
      <label className="block text-gray-700 mb-2 font-bold">{label}</label>
      <input
        type="file"
        {...register}
        accept={accept}
        className={`w-full px-4 py-2 border rounded focus:outline-none ${className}`}
      />
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </>
  );
};

export default CustomInputFile;
