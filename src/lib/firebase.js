import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchatapp-417d8.firebaseapp.com",
  projectId: "reactchatapp-417d8",
  storageBucket: "reactchatapp-417d8.appspot.com",
  messagingSenderId: "915949383580",
  appId: "1:915949383580:web:d616e63ec04f0f5c9fe259",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();

