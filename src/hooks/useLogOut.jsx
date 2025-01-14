import { useMutation } from "@tanstack/react-query";
import { LogOutCurrentUser } from "../Service/Auth";
import { toast } from "react-toastify";
import { useAuth } from "../contexts/AuthContext";

export const useLogOut = () => {
  const { setAuth } = useAuth();
  const { isPending, mutate } = useMutation({
    mutationFn: LogOutCurrentUser,
    onSuccess: (data) => {
      if (data?.logout) {
        toast.success(data?.message);
        setAuth(null);
        localStorage.clear();
      }
    },
  });

  return {
    mutate,
    isPending,
  };
};
