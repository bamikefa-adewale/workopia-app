/* eslint-disable react/prop-types */

const CustomInput = ({ register, className = "", error, label, ...props }) => {
  return (
    <>
      <label className="block text-gray-700 mb-2 font-bold">{label}</label>
      <input
        {...register}
        {...props}
        className={`border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      />
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </>
  );
};
export default CustomInput;
