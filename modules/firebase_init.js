// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmbYRqymX-0y28yj9K8P0oPbNrcmXTsG0",
  authDomain: "ejerciciohelados.firebaseapp.com",
  projectId: "ejerciciohelados",
  storageBucket: "ejerciciohelados.firebasestorage.app",
  messagingSenderId: "245621972682",
  appId: "1:245621972682:web:f9c88262c7009a993f9e33",
  measurementId: "G-05B0MTKSJ3"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db };