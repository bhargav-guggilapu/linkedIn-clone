import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDmuCstK64hHyTx4QfMhIRnydsj1VCgX5U",
  authDomain: "linkin-46671.firebaseapp.com",
  databaseURL: "https://linkin-46671-default-rtdb.firebaseio.com",
  projectId: "linkin-46671",
  storageBucket: "linkin-46671.appspot.com",
  messagingSenderId: "851483753658",
  appId: "1:851483753658:web:b0cdffe670ab73a0c95683",
  measurementId: "G-935J9FYCJY",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db, collection, getDocs, addDoc };
