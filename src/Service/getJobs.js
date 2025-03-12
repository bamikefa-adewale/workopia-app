import { toast } from "react-toastify";
import { supabase } from "../componenets/supabaseClient";

export const getJobs = async () => {
  const { data, error } = await supabase
    .from("jobLists")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching jobs:", error.message);
    return [];
  }

  return data;
};

export const getJob = async (id) => {
  if (!id) return null;
  const { data, error } = await supabase
    .from("jobLists")
    .select("*")
    .eq("id", id)
    .single();

  if (error && error.code !== "PGRST116") return toast.error(error.message);
  return data;
};
