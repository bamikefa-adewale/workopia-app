import { useQuery } from "@tanstack/react-query";
import { getJobs } from "../Service/getJobs";


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
