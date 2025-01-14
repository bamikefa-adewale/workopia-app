import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { supabase } from "../componenets/supabaseClient";
import { useForm } from "react-hook-form";
import { JobListSchema } from "../utilitis/Schema";
import { useMutation } from "@tanstack/react-query";

export const useJobForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(JobListSchema),
  });
  console.log(errors);

  const { isPending, mutate } = useMutation({
    mutationFn: async (data) => {
      const { error } = await supabase.from("jobLists").insert([data]);
      if (error) throw new Error(error.message);
      console.log("FormData:", data);
      return data;
    },
    onSuccess: (data) => {
      console.log("Job created successfully:", data);
      navigate("/");
    },
    onError: (error) => {
      console.error("Error saving job:", error.message);
    },
  });

  const onSubmit = (data) => {
    mutate({ ...data });
    console.log(data);
  };

  const handleCancel = () => {
    navigate("/");
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    handleCancel,
    errors,
    isPending,
  };
};
