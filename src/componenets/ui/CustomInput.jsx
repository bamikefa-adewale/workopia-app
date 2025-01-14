/* eslint-disable react/prop-types */

const CustomInput = ({
  placeholder,
  type = "text",
  register,
  className = "",
  error,
  name,
  label,
  ...props
}) => {
  return (
    <>
      <label className="block text-gray-700 mb-2 font-bold">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        {...register}
        {...props}
        className={`border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      />
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </>
  );
};
export default CustomInput;
