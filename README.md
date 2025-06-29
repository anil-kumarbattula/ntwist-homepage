# ntwist-homepage
Technical Assignment
# NTWIST Homepage Clone 💻

This project is a React-based clone of the NTWIST homepage, enhanced with a basic login authentication system. The application showcases various sections of the original homepage and integrates a simple Node.js/Express.js backend for user authentication. ✨

## Table of Contents

1.  [Project Structure](#1-project-structure) 📂
2.  [Features](#2-features) 🚀
3.  [Getting Started](#3-getting-started) 🛠️
    * [Prerequisites](#prerequisites) ✅
    * [Backend Setup](#backend-setup) ⚙️
    * [Frontend Setup](#frontend-setup) ⚛️
    * [Running the Application](#running-the-application) ▶️
4.  [Authentication Details](#4-authentication-details) 🔑
5.  [Key Technologies Used](#5-key-technologies-used) 💡
6.  [Acknowledgements](#6-acknowledgements) 🙏

## 1. Project Structure 📂

The project is divided into two main parts: the React frontend and the Node.js/Express.js backend, residing in separate folders to maintain clear separation of concerns.

.
├── ntwist-home-page/             # React Frontend Project Root ⚛️
│   ├── public/
│   │   ├── images/               # Static assets like images 🖼️
│   │   │   ├── unified-data-access.jpeg
│   │   │   ├── ai-chip.jpeg
│   │   │   ├── data-access.jpeg
│   │   │   ├── ntwist-logo.png
│   │   │   └── ... (other homepage specific images like client logos)
│   │   ├── index.html            # Main HTML file for React app
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   ├── AIPoweredInsightSection/
│   │   │   │   ├── AIPoweredInsightSection.jsx  # AI-Powered Insight section with phases
│   │   │   │   └── AIPoweredInsightSection.css
│   │   │   ├── Footer/                  # (Assumed based on general webpage structure)
│   │   │   │   ├── Footer.jsx
│   │   │   │   └── Footer.css
│   │   │   ├── Header/                  # Top navigation bar 导航
│   │   │   │   ├── Header.jsx
│   │   │   │   └── Header.css
│   │   │   ├── HeroSection/             # "From Data to Decision, Seamlessly." section
│   │   │   │   ├── HeroSection.jsx
│   │   │   │   └── HeroSection.css
│   │   │   ├── LoginSection/            # Dedicated login form component 🔐
│   │   │   │   ├── LoginSection.jsx
│   │   │   │   └── LoginSection.css
│   │   │   ├── TrustedBySection/        # "Trusted by Operations That Don't Settle" section
│   │   │   │   ├── TrustedBySection.jsx
│   │   │   │   └── TrustedBySection.css
│   │   │   └── WhatWeDeliverSection/    # "What We Deliver" section with feature cards
│   │   │       ├── WhatWeDeliverSection.jsx
│   │   │       └── WhatWeDeliverSection.css
│   │   ├── App.jsx                     # Main application component, handles routing and overall layout 🌐
│   │   ├── index.css                   # Global CSS styles 🎨
│   │   ├── main.jsx                    # Entry point for React app (renders App.jsx)
│   │   └── assets/                     # (Optional: for other local assets)
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── package.json                    # Frontend dependencies and scripts 📦
│   ├── package-lock.json
│   ├── README.md                       # This file 📄
│   └── vite.config.js                  # Vite configuration ⚡
│
└── server/                       # Node.js Backend Project Root 🖥️
├── node_modules/             # Installed Node.js packages 📦
├── server.js                 # Main server file with authentication logic 🔒
├── package.json              # Backend dependencies and scripts
└── package-lock.json


## 2. Features 🚀

* **Homepage Cloning:** Replicates the visual design and layout of the NTWIST homepage, including sections like "What We Deliver", "AI-Powered Insight", and "Trusted by Operations". 🎨
* **Responsive Design:** Styled to adapt to various screen sizes. 📱💻
* **Login Authentication:**
    * Dedicated login page with Username and Password input fields. 🔐
    * Connects to a simple RESTful API for authentication. 🔗
    * Navigates to the homepage upon successful login. ▶️
    * Redirects unauthorized users to the login page. 🚫
* **Node.js/Express.js Backend:** A lightweight API to handle login requests. ⚙️

## 3. Getting Started 🛠️

Follow these steps to set up and run the project locally.

### Prerequisites ✅

* Node.js (LTS version recommended) and npm installed.

### Backend Setup ⚙️

1.  **Navigate to the `server` directory:**
    ```bash
    cd server
    ```
2.  **Install backend dependencies:**
    ```bash
    npm install
    ```
3.  **Start the backend server:**
    ```bash
    node server.js
    # Or, for auto-restarting on file changes (if nodemon is installed):
    # npm run dev
    ```
    The server will run on `http://localhost:5000`. Keep this terminal open and the server running. 🚀

### Frontend Setup ⚛️

1.  **Open a new terminal window.**
2.  **Navigate to the `ntwist-home-page` directory:**
    ```bash
    cd ntwist-home-page
    ```
3.  **Install frontend dependencies (including `react-router-dom` and `concurrently`):**
    ```bash
    npm install
    ```
    If `react-router-dom` failed to install previously due to a typo, ensure you run `npm install react-router-dom` specifically.

### Running the Application ▶️

To run both the frontend and backend simultaneously in one command:

1.  **Ensure you are in the `ntwist-home-page` directory.**
2.  **Run the combined development script:**
    ```bash
    npm run start-dev
    ```
    This script (defined in `ntwist-home-page/package.json`) uses `concurrently` to start both the React development server and the Node.js backend.
    * The React app will typically run on `http://localhost:5173` (Vite default) or `http://localhost:3000` (Create React App default).
    * The Node.js backend will run on `http://localhost:5000`.

Alternatively, you can run them in separate terminals:

1.  **Terminal 1 (Backend):**
    ```bash
    cd server
    node server.js
    ```
2.  **Terminal 2 (Frontend):**
    ```bash
    cd ntwist-home-page
    npm run dev  # (for Vite) or npm start (for Create React App)
    ```

Open your web browser and navigate to the frontend URL (e.g., `http://localhost:5173` or `http://localhost:3000`). You should be redirected to the login page. ➡️

## 4. Authentication Details 🔑

* **Login Endpoint:** The frontend sends a `POST` request to `http://localhost:5000/login`.
* **Credentials:**
    * **Username:** `admin`
    * **Password:** `Admin` (case-sensitive)
* **Success Response:** `{"message": "Login successful", "status": "success"}` ✅
* **Error Response:** `{"message": "Error: Invalid credentials", "status": "error"}` (with HTTP status 401) ❌
* **Redirection Logic:**
    * Upon successful login, the React application uses `react-router-dom`'s `useNavigate` hook to programmatically redirect the user to the homepage (`/`). ▶️
    * **Basic Session Management with `localStorage`:** A flag `isLoggedIn` is set to `'true'` in the browser's `localStorage` upon successful login. The `App.jsx` component reads this `localStorage` value to determine if the user should be on the homepage or redirected to the login page. This state is managed actively in `App.jsx` to ensure immediate navigation without requiring a page refresh. 🔄
    * **Important Note on `localStorage` Security:** Using `localStorage` for authentication status is **NOT secure for production applications** 🚨. It is susceptible to XSS attacks and does not inherently provide robust session management or protect sensitive data. For a real-world application, you would typically use more robust methods like **HTTP-only cookies** to store JWTs (JSON Web Tokens) or session IDs. This implementation is for demonstration purposes only.

## 5. Key Technologies Used 💡

* **Frontend:**
    * React.js ⚛️
    * Vite (or Create React App) ⚡
    * React Router DOM (for navigation) 🛣️
    * CSS 🎨
* **Backend:**
    * Node.js 🟢
    * Express.js 🌐
    * CORS (for cross-origin requests) 🔄
* **Development Tools:**
    * `concurrently` (to run frontend and backend simultaneously) ↔️
    * `nodemon` (optional, for auto-restarting backend) 🔄

## 6. Acknowledgements 🙏

* NTWIST for the original homepage design inspiration.
* The React and Node.js communities for excellent tools and documentation.