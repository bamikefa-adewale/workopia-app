import React from "react";

const CustomSelect = ({ label, options, register, error, className }) => {
  return (
    <>
      <label className="block text-gray-700 mb-2 font-bold">{label}</label>
      <select
        {...register}
        className={`w-full px-4 py-2 border rounded focus:outline-none ${className}`}
      >
        <option value="" disabled>
          Select {label}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </>
  );
};

export default CustomSelect;
