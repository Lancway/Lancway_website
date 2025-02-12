
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA36I8r3tznX05x3duwWPWvkZijhESgV1g",
  authDomain: "lanceway-1c500.firebaseapp.com",
  projectId: "lanceway-1c500",
  storageBucket: "lanceway-1c500.firebasestorage.app",
  messagingSenderId: "954724843971",
  appId: "1:954724843971:web:a3109dfb8b225578d0bd76",
  measurementId: "G-24K6FNX89M",
  databaseURL: "https://lanceway-1c500-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export default app;
