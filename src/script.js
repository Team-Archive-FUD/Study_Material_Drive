// Initializing Supabase
const SUPABASE_URL = "https://idbdkwbdzwgskjwulrzp.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlkYmRrd2Jkendnc2tqd3VscnpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzODA2OTIsImV4cCI6MjA3Mzk1NjY5Mn0.byajBhhxL2zrELQ929PAHFmXyCoPgMcyO1q9LqDkGrk";
const { createClient } = supabase;
const client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
// ----------------- DISPLAY MATERIALS -----------------
async function loadMaterials() {
  const { data, error } = await client
    .from("materials")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching materials:", error.message);
    return;
  }

  const list = document.getElementById("materialsList");
  list.innerHTML = "";

  data.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("material-card");
    card.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <a href="${item.file_url}" target="_blank">Download</a>
    `;
    list.appendChild(card);
  });
}

// Load materials on page load
if (document.getElementById("materialsList")) {
  loadMaterials();
}