
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfiin6mXTrl7xgl2mX6i4svBl6PAXxizc",
  authDomain: "chatapplicationreact-a477f.firebaseapp.com",
  projectId: "chatapplicationreact-a477f",
  storageBucket: "chatapplicationreact-a477f.appspot.com",
  messagingSenderId: "104939930822",
  appId: "1:104939930822:web:3b19ec1774b66944a7c3c7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();