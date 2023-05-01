// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVL67oRkH46qEldckGPRsLbYCJptoH-qY",
  authDomain: "chef-recipe-hunting.firebaseapp.com",
  projectId: "chef-recipe-hunting",
  storageBucket: "chef-recipe-hunting.appspot.com",
  messagingSenderId: "864717233354",
  appId: "1:864717233354:web:9ae7f1263a8d330fad6833"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;