# 📚 Study Material Drive

An open-source, collaborative, and centralized web platform for university departments where students can upload, share, and access study materials freely.  
The goal is to create a **student-driven knowledge hub** that makes learning resources more accessible, organized, and reusable.
[Visit site](https://team-archive-fud.github.io/Study_Material_Drive/)

---

## 🚀 Problem Statement

University students often face difficulties accessing past questions, lecture notes, and study guides in a centralized and reliable way.  
Most resources are scattered across personal devices, closed groups, or offline materials, making collaboration and accessibility a challenge.

**Study Material Drive** solves this by providing an **open-source departmental material repository** where students can freely contribute, search, and access resources.

---

## 🎯 Objectives

- Provide a **centralized platform** for departmental study materials.
- Enable **uploading, sharing, and downloading** of lecture notes, past questions, and study guides.
- Support **secure access and authentication** (via Supabase).
- Foster **open collaboration** with contributions from students and the open-source community.
- Ensure the project is **scalable** to multiple departments/universities.

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript (Vanilla or lightweight framework)
- **Backend & Services:** [Supabase](https://supabase.com/)
  - Database: Postgres + PostgREST (MIT License)
  - Authentication: GoTrue (MIT License)
- **Version Control & Hosting:** Git + GitHub
- **Documentation:** Markdown, GitHub Wiki

---

## 📦 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/<your-group-username>/study-material-drive.git
   cd study-material-drive
   ```

2. **Install dependencies**

   ```bash
   # If using npm
   npm install
   ```

3. **Setup environment variables**  
   Create a `.env` file and add your Supabase credentials:

   ```env
   SUPABASE_URL=your-supabase-url
   SUPABASE_KEY=your-supabase-key
   ```

4. **Run locally**
   ```bash
   npm start
   ```

---

## 📖 Usage

- **Sign up / Log in** using student credentials.
- **Upload materials** (lecture notes, past questions, study guides).
- **Browse and download** study resources shared by others.
- **Search and filter** by course, department, or material type.

---

## 🤝 Contribution Guide

We welcome contributions from both students and the wider open-source community!

Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for:

- Branching workflow
- Pull request guidelines
- Code style conventions

You can also use GitHub Issues to suggest features, report bugs, or discuss improvements.

---

## 📂 Project Structure

```
study-material-drive/
├── public/
├── index.html          # Landing page (Musa Yusuf Galambi)
├── style.css           # Landing page styling
├── signUp.html         # Sign-up page (Muhammad Saidu Hassan)
├── signUp.css          # Sign-up page styling
├── login.html          # Login page (Kadijah Ibrahim)
├── login.css           # Login page styling
├── script.js           # JavaScript logic (auth, file upload, materials display, search)
├── studyDrive.html     # File upload & materials display page (Adam Abubakar Adam, Ahmad Muhammad Auwal, Omokayode Abdulqudus Abdulrahman)
├── studyDrive.css      # Styling for file upload, display, and search
├── assets/             # Images, icons, static files
│
├── src/
│
│
├── docs/                   # Documentation
│   ├── proposal.md
│   └── report.md
│
├── tests/                  # Unit and integration tests
│
├── LICENSE                 # MPL 2.0 + Third-Party MIT notice
├── README.md               # Project overview
└── CONTRIBUTING.md          # Contribution guidelines

```

---

## 📜 License

This project is licensed under the **Mozilla Public License 2.0 (MPL 2.0)**.

### Third-Party Licenses

This project uses [Supabase](https://supabase.com) components:

- Supabase Database (Postgres + PostgREST) – **MIT License**
- Supabase Auth (GoTrue) – **MIT License**

Copies of these licenses can be found at [opensource.org/licenses/MIT](https://opensource.org/licenses/MIT).

---

## 👨‍💻 Credits

This project was developed by:

- **Fattahan Taiwo Adeiza (FCP/CSE/20/1011)** – Project Lead, Git Manager, Supabase Setup, Initial Project Structure (pushed foundational files: `.gitignore`, `README.md`, `LICENSE`, `index.html`, `style.css`, `studyDrive.html`, `studyDrive.css`, `script.js`).
- **Musa Yusuf Galambi (FCP/CSE/20/1012)** – Landing Page Development (`index.html`, `style.css`).
- **Muhammad Saidu Hassan (FCP/CSE/20/1013)** – Authentication UI (Sign-up) (`signUp.html`, `signUp.css`).
- **Kadijah Ibrahim (FCP/CSE/20/1014)** – Authentication UI (Login & Logout) (`login.html`, `login.css`).
- **Abubakar Sadiq Yunusa (FCP/CSE/20/1016)** – Authentication Logic (Front-end) (Supabase auth integration in `script.js`).
- **Adam Abubakar Adam (FCP/CSE/20/1017)** – File Upload UI (`studyDrive.html`, `studyDrive.css`).
- **Mahmud Yahaya Abubakar (FCP/CSE/20/1018)** – File Upload Logic (Supabase storage integration in `script.js`).
- **Ahmad Muhammad Auwal (FCP/CSE/20/1019)** – Materials Display UI (`studyDrive.html`, `studyDrive.css`).
- **Umar Salihu Faruk (FCP/CSE/20/1021)** – Materials Display Logic (fetch & render materials from Supabase in `script.js`).
- **Omokayode Abdulqudus Abdulrahman (FCP/CSE/20/1022)** – Search & Filtering Logic & UI (`studyDrive.html`, `studyDrive.css`, `script.js`).

---

## 🙏 Acknowledgments

- [Supabase](https://supabase.com) for the open-source database and authentication services.
- Federal University Dutse – CSE404 Open Source Software Development course.
- The open-source community for inspiration and contributions.
