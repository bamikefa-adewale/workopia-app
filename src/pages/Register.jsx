import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "../utilitis/Schema";
import { useRegister } from "../hooks/useRegister";
import { useNavigate } from "react-router-dom";
import CustomInput from "../componenets/ui/CustomInput";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegisterSchema),
  });
  const { mutate, isPending, isError, error } = useRegister();
  const onSubmit = (data) => {
    mutate(data);
    navigate("/");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Register
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <CustomInput
              type="text"
              register={register("fullName")}
              placeholder="Enter your full Name"
              className="w-full px-4 py-2 border rounded focus:outline-none"
              error={errors.fullName}
            />
          </div>
          <div className="mb-4">
            <CustomInput
              type="text"
              register={register("email")}
              placeholder="Email Address"
              className="w-full px-4 py-2 border rounded focus:outline-none"
              error={errors.email}
            />
          </div>
          <div className="mb-4">
            <CustomInput
              type="text"
              register={register("state")}
              placeholder="State"
              className="w-full px-4 py-2 border rounded focus:outline-none"
              error={errors.state}
            />
          </div>
          <div className="mb-4">
            <CustomInput
              type="text"
              register={register("city")}
              placeholder="City"
              className="w-full px-4 py-2 border rounded focus:outline-none"
              error={errors.city}
            />
          </div>
          <div className="mb-4">
            <CustomInput
              type="password"
              register={register("password")}
              placeholder="Password"
              className="w-full px-4 py-2 border rounded focus:outline-none"
              error={errors.password}
            />
          </div>
          <button
            disabled={isPending}
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none"
          >
            {isPending ? "Loading..." : "Register"}
          </button>
          {isError && <p className="text-red-500 mt-2">{error.message}</p>}
          <p className="mt-4 text-gray-500 text-center">
            Already have an account?{" "}
            <a className="text-blue-900" href="/login">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
