import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAAzB8mQopznXqQ0GYMgXPGyJ1MRX_sNqo",
  authDomain: "project-bc249.firebaseapp.com",
  projectId: "project-bc249",
  storageBucket: "project-bc249.firebasestorage.app",
  messagingSenderId: "560403078565",
  appId: "1:560403078565:web:8f9ee8082ce9367f6fdc4c"
};

export const app = initializeApp(firebaseConfig);