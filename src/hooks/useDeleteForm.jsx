import { useMutation } from "@tanstack/react-query";
import { supabase } from "../componenets/supabaseClient";

export const useDeleteForm = () => {
  const { mutate } = useMutation(async (id) => {
    const { error } = await supabase.from("jobLists").delete().eq("id", id);
    if (error) {
      throw new Error(error.message);
    }
  });

  return mutate;
};
