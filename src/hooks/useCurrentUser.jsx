import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../Service/Auth";

export const useCurrentUser = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return {
    user: data,
    isLoading,
  };
};
