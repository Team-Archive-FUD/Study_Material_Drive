document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    console.log("Hamburger clicked");
    navLinks.classList.toggle("active");
  });

  navLinks.querySelectorAll("a").forEach(link =>
    link.addEventListener("click", () => navLinks.classList.remove("active"))
  );
});

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

// ----------------- FILE UPLOAD -----------------
const uploadForm = document.getElementById("uploadForm");
if (uploadForm) {
  uploadForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const file = document.getElementById("fileInput").files[0];

    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    // Upload file to Supabase Storage
    const filePath = `${Date.now()}-${file.name}`;
    const { data: fileData, error: fileError } = await client.storage
      .from("study-files")
      .upload(filePath, file);

    if (fileError) {
      alert("Upload failed: " + fileError.message);
      return;
    }

    const fileUrl = `${SUPABASE_URL}/storage/v1/object/public/study-files/${filePath}`;

    // Insert metadata into DB
    const { data, error } = await client
      .from("materials")
      .insert([
        { title, description, file_url: fileUrl, uploaded_by: "student" },
      ]);

    if (error) {
      alert("Database error: " + error.message);
    } else {
      alert("File uploaded successfully!");
      uploadForm.reset();
      loadMaterials(); // refresh list
    }
  });
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

// ----------------- SEARCH FUNCTION -----------------
const searchBar = document.getElementById("searchBar");
if (searchBar) {
  searchBar.addEventListener("input", async (e) => {
    const query = e.target.value.toLowerCase();

    const { data, error } = await client
      .from("materials")
      .select("*")
      .ilike("title", `%${query}%`);

    if (!error) {
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
  });
}
