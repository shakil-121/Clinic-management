import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBkAqUFNNHzcqhG6eWtUkr95Lx7il8Nc0A",
  authDomain: "shakil-medical.firebaseapp.com",
  projectId: "shakil-medical",
  storageBucket: "shakil-medical.appspot.com",
  messagingSenderId: "142840398408",
  appId: "1:142840398408:web:a0ab32aff199071daf0e7d",
};

//Initialize firebase
const app = initializeApp(firebaseConfig);
export default app;
