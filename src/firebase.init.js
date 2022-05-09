import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDc_de2KNrxxW_hst5z6ayKu6HjRV9ctFk",
  authDomain: "wireehouse.firebaseapp.com",
  projectId: "wireehouse",
  storageBucket: "wireehouse.appspot.com",
  messagingSenderId: "823768477650",
  appId: "1:823768477650:web:132381c192066fd298220b",
  measurementId: "G-WHC95GFZ5E"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
