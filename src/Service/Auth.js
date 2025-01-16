import { toast } from "react-toastify";
import { supabase } from "../componenets/supabaseClient";
//Register api
export const signUpApi = async (value) => {
  const { email, password, ...profileDetails } = value;
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (authError) {
    return toast.error(authError.message);
  }

  const userId = authData?.user?.id;
  if (userId) {
    const { data: profileData, error: profileError } = await supabase
      .from("userProfile")
      .insert([{ email, ...profileDetails }])
      .select()
      .single();
    console.log(value);
    if (profileError) {
      return toast.error(profileError.message);
    }
    return profileData;
  }
};

//Login api
export const signInApi = async (credentials) => {
  const { email, password } = credentials;
  const { data: authData, error: authError } =
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

  if (authError) {
    return toast.error(authError.message);
  }

  const userId = authData?.user?.id;
  if (userId) {
    const { data: profileData, error: profileError } = await supabase
      .from("userProfile")
      .select("*")
      .eq("id", userId)
      .single();

    if (profileError) {
      return toast.error(profileError.message);
    }
    return profileData;
  }
};

// current user api
export const getCurrentUser = async () => {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    return toast.error(error.message);
  }

  return user;
};

// logout api
export const LogOutCurrentUser = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    toast.error(error.message);
  }
  return {
    message: "Logout, Successful",
    logout: true,
  };
};

// delete a job api
export const deleteJob = async (id) => {
  if (!id) return null;
  const { error } = await supabase.from("jobLists").delete().eq("id", id);
  if (error) {
    return toast.error(error.message);
  }
  return {
    success: true,
    message: "Delete Job Successfully",
  };
};
