import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7w_bUx66gCGfV_aNKaPkUjUipmMZjLHc",
  authDomain: "tsstdata.firebaseapp.com",
  projectId: "tsstdata",
  storageBucket: "tsstdata.appspot.com",
  messagingSenderId: "987648950594",
  appId: "1:987648950594:web:4d8de3dd6d888894ba88db",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
