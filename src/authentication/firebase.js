// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv97XZ658kYJ0R5TiVkTDdQPPjdkmzHQQ",
  authDomain: "fir-trial-auth.firebaseapp.com",
  projectId: "fir-trial-auth",
  storageBucket: "fir-trial-auth.appspot.com",
  messagingSenderId: "779731890926",
  appId: "1:779731890926:web:a02c95342e3650f2fcb9ff",
};

// Initi alize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerWithEmail = async (email, password) => {
  try {
    const newUser = await createUserWithEmailAndPassword(auth, email, password);
    console.log(newUser.user);
  } catch (err) {
    console.log(err);
    console.log(err.code);
    console.log(err.message);
  }
};

const loginWithEmail = async (email, password) => {
  try {
    const LoginUser = await signInWithEmailAndPassword(auth, email, password);
    console.log(LoginUser.user);
  } catch (err) {
    console.log(err);
    console.log(err.code);
    console.log(err.message);
  }
};
const resetPass = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (err) {
    console.log(err);
    console.log(err.code);
    console.log(err.message);
  }
};
const logOut = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
    console.log(err.code);
    console.log(err.message);
  }
};

export { auth, registerWithEmail, loginWithEmail, resetPass, logOut };
