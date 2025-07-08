// ✅ Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// ✅ Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBoWxvm8Mz5K6H5hBr37Bs4HYjPQEmi2qk",
  authDomain: "peojecthub.firebaseapp.com",
  projectId: "peojecthub",
  storageBucket: "peojecthub.appspot.com",
  messagingSenderId: "252517616777",
  appId: "1:252517616777:web:be6354cc9629d289110a58",
  measurementId: "G-J1N2PQ66NN"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Handle Sign Up Form
const signupForm = document.getElementById("signup-form");

if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("✅ User signed up:", userCredential.user);
        window.location.href = "dashboard.html";
      })
      .catch((error) => {
        console.error("❌ Sign up error:", error.message);
        alert("Sign up failed: " + error.message);
      });
  });
}

// ✅ Handle Login Form
const loginForm = document.getElementById("login-form");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("✅ Login successful:", userCredential.user);
        window.location.href = "dashboard.html";
      })
      .catch((error) => {
        console.error("❌ Login error:", error.message);
        alert("Login failed: " + error.message);
      });
  });
}
