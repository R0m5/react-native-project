// const firebaseConfig = {
//   apiKey: "AIzaSyCTBqhzEmiHep2mN6FP0xSEVltFoTu_XO4",
//   authDomain: "awesomeproject-99652.firebaseapp.com",
//   databaseURL: "https://awesomeproject-99652-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "awesomeproject-99652",
//   storageBucket: "awesomeproject-99652.appspot.com",
//   messagingSenderId: "572145667946",
//   appId: "1:572145667946:web:8edca04b300e5b9ad91f13",
//   measurementId: "G-DFCNWCXDDW"
// };

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyCTBqhzEmiHep2mN6FP0xSEVltFoTu_XO4",
//   authDomain: "awesomeproject-99652.firebaseapp.com",
//   databaseURL: "https://awesomeproject-99652-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "awesomeproject-99652",
//   storageBucket: "awesomeproject-99652.appspot.com",
//   messagingSenderId: "572145667946",
//   appId: "1:572145667946:web:8edca04b300e5b9ad91f13",
//   measurementId: "G-DFCNWCXDDW"
// };
const firebaseConfig = {
  apiKey: "AIzaSyDFYa7Kj_stEPFHA4R2QgcW6kW50yEiAjQ",
  authDomain: "react-native-dd0b1.firebaseapp.com",
  databaseURL:
    "https://react-native-dd0b1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-native-dd0b1",
  storageBucket: "react-native-dd0b1.appspot.com",
  messagingSenderId: "78252806212",
  appId: "1:78252806212:web:ae90cac39f0e5b51ea6c11",
  measurementId: "G-6EZ09E8Q8P",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
