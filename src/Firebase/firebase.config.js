// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb6a5zRbiQc6Ftfvue3H8_CLd1oWFTQzk",
  authDomain: "event-management-project-460c5.firebaseapp.com",
  projectId: "event-management-project-460c5",
  storageBucket: "event-management-project-460c5.appspot.com",
  messagingSenderId: "557748562543",
  appId: "1:557748562543:web:c7d3a3af34d452c1a4bb9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;