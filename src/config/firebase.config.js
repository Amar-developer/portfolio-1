import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1vbGkX029HsSYFdi26KNdqacWE0pfDXw",
  authDomain: "my-portfolio-a8e41.firebaseapp.com",
  projectId: "my-portfolio-a8e41",
  storageBucket: "my-portfolio-a8e41.appspot.com",
  messagingSenderId: "427163845196",
  appId: "1:427163845196:web:14cdf84a7bff8e11942ae9",
  measurementId: "G-6EMTVZWGEL",
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };
