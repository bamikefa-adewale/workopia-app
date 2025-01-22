import { useMutation } from "@tanstack/react-query";
import { signInApi } from "../Service/Auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "react-toastify";

export const useLogin = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: signInApi,
    onSuccess: (data) => {
      toast.success("Login Successful");
      setAuth(data);
      return navigate("/");
    },
  });

  return mutation;
};
