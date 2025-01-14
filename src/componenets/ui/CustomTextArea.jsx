/* eslint-disable react/prop-types */

const CustomTextArea = ({ placeholder, label, register, className, error }) => {
  return (
    <div>
      <label className="block text-gray-700 mb-2 font-bold">{label}</label>
      <textarea
        placeholder={placeholder}
        {...register}
        className={`w-full px-4 py-2 border rounded focus:outline-none ${className}`}
      ></textarea>
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
};

export default CustomTextArea;
