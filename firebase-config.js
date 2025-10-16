// ============================
// ✅ Firebase Configuration
// ==============================

const firebaseConfig = {
  apiKey: "AIzaSyCBN5AMN7j_qnlnwulFHvIeR1NmLyQ0OZo",
  authDomain: "techverse-ca88a.firebaseapp.com",
  databaseURL: "https://techverse-ca88a-default-rtdb.firebaseio.com",
  projectId: "techverse-ca88a",
  storageBucket: "techverse-ca88a.firebasestorage.app",
  messagingSenderId: "288969741715",
  appId: "1:288969741715:web:03ddb8b82da9224e234466",
  measurementId: "G-33XTL4HJR9"
};

// ✅ Initialize Firebase
firebase.initializeApp(firebaseConfig);

// ✅ Create reusable Firebase services
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

console.log("🔥 Firebase initialized successfully");
