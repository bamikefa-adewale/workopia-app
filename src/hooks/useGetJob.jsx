import { useQuery } from "@tanstack/react-query";
import { getJob } from "../Service/getJobs";
import { useParams } from "react-router-dom";

export const useGetJob = () => {
  const { id } = useParams();
  const { isPending, data, error } = useQuery({
    queryKey: ["jobLists", id ?? ""],
    queryFn: async () => {
      if (!id) return;
      return await getJob(id);
    },
  });
  return {
    data,
    isPending,
    error,
    id,
  };
};
