import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginSchema } from "../utilitis/Schema";
import { useLogin } from "../hooks/useLogin";
import CustomInput from "../componenets/ui/CustomInput";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });
  const { mutate, isPending, isError } = useLogin();
  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <CustomInput
              type="email"
              register={register("email")}
              placeholder="Email Address"
              className="w-full px-4 py-2 border rounded focus:outline-none"
              error={errors.email}
            />
          </div>
          <div className="mb-4">
            <CustomInput
              type="text"
              register={register("password")}
              placeholder="Enter Password"
              className="w-full px-4 py-2 border rounded focus:outline-none"
              error={errors.password}
            />
          </div>
          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none"
          >
            {isPending ? "Loading..." : "Login"}
          </button>
          {isError && errors.message}
          <p className="mt-4 text-gray-500">
            Don't have an account?{" "}
            <a className="text-blue-900" href="/register">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
