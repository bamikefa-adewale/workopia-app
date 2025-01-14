import { useQuery } from "@tanstack/react-query";
import { getJob, getJobs } from "../Service/getJobs";
import { useParams } from "react-router-dom";

export const useGetJobs = () => {
  const { isPending, data, error } = useQuery({
    queryKey: ["jobLists"],
    queryFn: getJobs,
  });
  return {
    data,
    isPending,
    error,
  };
};

export const useGetJob = () => {
  const { id } = useParams();
  const { isPending, data, error } = useQuery({
    queryKey: ["jobLists", id],
    queryFn: () => getJob(id),
    enabled: !!id, // run if my query id is present(exists)
  });
  return {
    data,
    isPending,
    error,
    id,
  };
};
