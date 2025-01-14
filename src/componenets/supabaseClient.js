import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tfnuvaxvcszbrztyyqxw.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmbnV2YXh2Y3N6YnJ6dHl5cXh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYxNzQ3NjUsImV4cCI6MjA1MTc1MDc2NX0.I6hlliVj2TNMlvymYJw4w9_4x1cD37_Bcpd-wQy9x-Y";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
