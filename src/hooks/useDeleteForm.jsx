import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { deleteJob } from "../Service/Auth";
import { toast } from "react-toastify";

export const useDeleteForm = () => {
  // Access the client
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: async (id) => deleteJob(id),
    onSuccess: (data) => {
      if (data.success) {
        toast.success(data?.message);
        queryClient.invalidateQueries({ queryKey: ["jobLists"] });
        return navigate("/");
      }
    },
  });

  return {
    mutate,
    deleteJobLoader: isPending,
  };
};
