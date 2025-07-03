# 📝 QuickBlogMERN

**QuickBlogMERN** is a full-stack blog publishing platform built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**. It allows users to register, log in, create blog posts with image uploads, toggle publish status, add comments, and even generate content using AI via Google’s **Gemini API**.

**Live_link** => https://quickblogfrontend-coral.vercel.app/

---

## 🚀 Features

- 🔐 JWT-based user authentication
- 📝 Create, edit, delete blog posts with image uploads
- 🖼️ Image handling using Multer
- 🧠 Generate blog content using Gemini AI
- 📬 Add and view comments on blogs
- 📂 Publish/Unpublish blog posts
- 📡 RESTful API structure
- 🎨 Responsive UI with Tailwind CSS
- ⚛️ React-based frontend with Axios integration

---

## 🛠️ Tech Stack

| Layer       | Tech Used                   |
|-------------|-----------------------------|
| Frontend    | React, Tailwind CSS, Axios  |
| Backend     | Node.js, Express.js         |
| Database    | MongoDB, Mongoose           |
| Auth        | JWT                         |
| File Upload | Multer                      |
| AI Service  | Gemini API (Google AI)      |

---

## 📁 Folder Structure

QuickBlogMERN/
├── client/ # React frontend
│ └── src/
│ ├── components/ # Reusable components
│ ├── pages/ # Page views
│ └── App.jsx # Main app component
│
├── server/ # Node.js backend
│ ├── controllers/ # Route logic
│ ├── middleware/ # Auth & file handling
│ ├── models/ # Mongoose schemas
│ ├── routes/ # API routes
│ ├── uploads/ # Uploaded blog images
│ ├── index.js # Server entry point
│ └── .env # Environment config
│
├── .gitignore
└── README.md


---

## 🔧 Installation

### 1. Clone the repository
bash
git clone https://github.com/paraspateriya06/QuickBlogMERN.git
cd QuickBlogMERN


2. Setup the backend
cd server
npm install


3. Setup the frontend
bash
Copy
Edit
cd ../client
npm install
npm start
