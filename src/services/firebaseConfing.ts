import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALbPRiHphQ_Nae8AJFc1ayWuvR6ty-3no",
  authDomain: "storedata-2309a.firebaseapp.com",
  projectId: "storedata-2309a",
  storageBucket: "storedata-2309a.appspot.com",
  messagingSenderId: "55900534969",
  appId: "1:55900534969:web:ccaaffaae336fa6286c368",
};

// Initialize Firebase

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
