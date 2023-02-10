// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcbNaw_jALJAVBXmiwMVJHWDlwh5NEKEo",
  authDomain: "crud-dwsf-ucampers.firebaseapp.com",
  projectId: "crud-dwsf-ucampers",
  storageBucket: "crud-dwsf-ucampers.appspot.com",
  messagingSenderId: "984710990573",
  appId: "1:984710990573:web:8a2fd76732aa9c351adae4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
