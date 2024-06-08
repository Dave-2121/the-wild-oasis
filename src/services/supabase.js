import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://vyuwttkavutrtnsssblo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5dXd0dGthdnV0cnRuc3NzYmxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU5MTc4MTMsImV4cCI6MjAzMTQ5MzgxM30.ZMy3_Ut73L49puDwSjGDkFNrdeCKACRndeKzDy028J4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
