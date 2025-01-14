import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { JobListSchema } from "../utilitis/Schema";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { supabase } from "../componenets/supabaseClient";

export const useEditForm = (initialData) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(JobListSchema),
    defaultValues: initialData || {},
  });

  useEffect(() => {
    if (initialData) {
      reset(initialData); // Reset form with pre-filled data
    }
  }, [initialData, reset]);

  const { isPending, mutate } = useMutation({
    mutationFn: async (data) => {
      const { error } = await supabase
        .from("jobLists")
        .update(data)
        .eq("id", initialData.id);
      if (error) throw new Error(error.message);
      return data;
    },
    onSuccess: () => {
      reset();
      navigate("/");
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  const handleCancel = () => {
    reset(initialData); // Reset form back to initial data
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
