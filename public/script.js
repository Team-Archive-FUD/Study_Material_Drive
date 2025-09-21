// Initializing Supabase
const SUPABASE_URL = "https://idbdkwbdzwgskjwulrzp.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlkYmRrd2Jkendnc2tqd3VscnpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzODA2OTIsImV4cCI6MjA3Mzk1NjY5Mn0.byajBhhxL2zrELQ929PAHFmXyCoPgMcyO1q9LqDkGrk";
const { createClient } = supabase;
const client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ----------------- SIGN UP -----------------
const signUpForm = document.getElementById("signUpForm");
if (signUpForm) {
  signUpForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const fullName = document.getElementById("fullName").value;

    const { data, error } = await client.auth.signUp({
      email: email,
      password: password,
      options: {
        data: { full_name: fullName },
      },
    });

    if (error) {
      alert("Error: " + error.message);
    } else {
      alert("Sign-up successful! Please check your email to confirm.");
      window.location.href = "login.html"; // redirect to login
    }
  });
}

// ----------------- LOGIN -----------------
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const { data, error } = await client.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      alert("Login failed: " + error.message);
    } else {
      alert("Login successful!");
      window.location.href = "studyDrive.html"; // redirect after login
    }
  });
}

// ----------------- LOGOUT -----------------
async function logout() {
  const { error } = await client.auth.signOut();
  if (error) {
    alert("Error logging out: " + error.message);
  } else {
    alert("Logged out successfully!");
    window.location.href = "index.html"; // back to landing page
  }
}

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