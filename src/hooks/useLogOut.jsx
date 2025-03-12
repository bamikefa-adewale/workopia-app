import { useMutation } from "@tanstack/react-query";
import { LogOutCurrentUser } from "../Service/Auth";
import { toast } from "react-toastify";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export const useLogOut = () => {
  const naviagate = useNavigate();
  const { setAuth } = useAuth();
  const { isPending, mutate } = useMutation({
    mutationFn: LogOutCurrentUser,
    onSuccess: (data) => {
      if (data?.logout) {
        toast.error(data?.message);

        setAuth(null);
        localStorage.clear();
        naviagate("/");
      }
    },
  });

  return {
    mutate,
    isPending,
  };
};
