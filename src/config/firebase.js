// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCmzrBGZIqMwbZRWR87mb7-OfJW12Bop3s",
    authDomain: "login-auth-2513b.firebaseapp.com",
    projectId: "login-auth-2513b",
    storageBucket: "login-auth-2513b.appspot.com",
    messagingSenderId: "609602391571",
    appId: "1:609602391571:web:4071917d6b84fc5603f9e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth();
export default app;