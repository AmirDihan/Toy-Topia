# 🧸 Toyzy

**Toyzy** is a modern and playful toy marketplace built with React and Firebase.  
It allows users to browse toys, view details, manage profiles, and experience secure authentication — all in a clean, responsive interface.

---

## 🌟 Purpose

The purpose of **Toyzy** is to create a fun, interactive, and educational toy store platform where users can discover and learn about different toys while exploring a real-world React + Firebase implementation.

---

## 🌐 Live Demo

👉 **Live Site URL:** [https://toy-topia-firebase-auth-12712.web.app/](https://toy-topia-firebase-auth-12712.web.app/)  

---

## 🚀 Key Features

- 🔐 **Firebase Authentication**
  - Sign up / Login using email & password.
  - Google sign-in option.
  - Persistent user session even after reload.

- 🧭 **Private Routes**
  - Access restriction for certain routes (like “Wishlist”, "My Profile") until login.

- 🧸 **Dynamic Toy Display**
  - Toy data displayed dynamically using responsive grid layout.

- ⭐ **Detailed Toy View**
  - Each toy page shows detailed information such as price, rating, and description.

- 💖 **Wishlist**
  - Users can save their favorite toys to a personal list for easy access later by using local storage.

- 🧠 **Password Reset**
  - “Forgot Password” page allows users to reset via email link.

- 🧍‍♂️ **Profile Update**
  - Users can update display name and profile photo instantly.

- 🧾 **Toast Notifications**
  - Instant success/error feedback on login, register, or updates.

- 📱 **Responsive Design**
  - Optimized for mobile, tablet, and desktop.

---

## 🧩 NPM Packages Used

| Package | Description |
|----------|--------------|
| **react** | Core React library for building UI |
| **react-router-dom** | Routing and navigation |
| **firebase** | Firebase authentication and backend services |
| **react-icons** | Icon set used for UI enhancement |
| **react-toastify** | For stylish toast notifications |
| **react-spinners** | Loading animations for async operations |
| **tailwindcss** | Utility-first CSS framework for styling |
| **daisyUI** | Tailwind component library for prebuilt UI |
| **vite** | Fast build tool and dev server |

---

## ⚙️ How to Run Locally

1. **Clone the Repository**

   git clone https://github.com/yourusername/toyzy.git
   cd toyzy
2. **Install Dependencies**

    npm install
3. **Set Up Firebase Configuration**
    Create a .env file in your root folder and add your Firebase credentials:

    VITE_apiKey=your_firebase_api_key
    VITE_authDomain=your_auth_domain
    VITE_projectId=your_project_id
    VITE_storageBucket=your_storage_bucket
    VITE_messagingSenderId=your_messaging_sender_id
    VITE_appId=your_app_id
4. **Run the Development Server**

    npm run dev
5. **Open the App in Browser**
    Visit 👉 http://localhost:5173

🗂️ Project Folder Structure :

    Toyzy/
    ├── node_modules/
    ├── public/
    │ ├── toysData.json
    │ └── vite.svg
    ├── src/
    │ ├── assets/
    │ │ ├── error-404.png
    │ │ └── react.svg
    │ ├── components/
    │ │ ├── CarouselImage.jsx
    │ │ ├── Footer.jsx
    │ │ ├── MyProfile.jsx
    │ │ ├── Navbar.jsx
    │ │ ├── ToyDetails.jsx
    │ │ └── ToysCard.jsx
    │ ├── Context/
    │ │ ├── AuthContext.jsx
    │ │ └── AuthProvider.jsx
    │ ├── firebase/
    │ │ └── firebase.config.js
    │ ├── Hooks/
    │ │ └── useGetToysData.jsx
    │ ├── layout/
    │ │ └── MainLayout.jsx
    │ ├── pages/
    │ │ ├── ErrorPage.jsx
    │ │ ├── ForgetPassword.jsx
    │ │ ├── Home.jsx
    │ │ ├── Login.jsx
    │ │ └── Register.jsx
    │ │ └── Wishlist.jsx
    │ ├── privateRoute/
    │ │ └── PrivateRoute.jsx
    │ ├── routes/
    │ │ └── routes.jsx
    │ ├── index.css
    │ └── main.jsx
    ├── .env
    ├── .gitignore
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── vite.config.js
    └── README.md

💡 Developer Info

👨‍💻 Developer: Amir Hossan Dihan

📧 Email: amirhossan160@gmail.com

📅 Year: 2025
🌍 Location: Bangladesh
