import { useMutation } from "@tanstack/react-query";
import { signUpApi } from "../Service/Auth";
import { toast } from "react-toastify";
import { useAuth } from "../contexts/AuthContext";

export const useRegister = () => {
  const { setAuth } = useAuth();
  const mutation = useMutation({
    mutationFn: signUpApi,
    onSuccess: (data) => {
      toast.success("Register Successful");
      setAuth(data);
    },
  });

  return mutation;
};
