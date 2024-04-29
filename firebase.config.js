import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env?.REACT_FIREBASE_API_KEY,
  authDomain: process.env?.REACT_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env?.REACT_FIREBASE_DATABASE_URL,
  projectId: process.env?.REACT_FIREBASE_PROJECT_ID,
  storageBucket: process.env?.REACT_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env?.REACT_FIREBASE_MESSAGING_SENDING_ID,
  appId: process.env?.REACT_FIREBASE_APP_ID,
  measurementId: process.env?.REACT_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);


export { db, app, auth };
