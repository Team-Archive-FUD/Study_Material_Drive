// Initializing Supabase
const SUPABASE_URL = "https://idbdkwbdzwgskjwulrzp.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlkYmRrd2Jkendnc2tqd3VscnpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzODA2OTIsImV4cCI6MjA3Mzk1NjY5Mn0.byajBhhxL2zrELQ929PAHFmXyCoPgMcyO1q9LqDkGrk";
const { createClient } = supabase;
const client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
