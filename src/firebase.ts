import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from 'firebase/firestore';
import { Auth, getAuth } from 'firebase/auth';

let isFirebaseInitialized = false;

const FirebaseApp = {
    apiKey: "AIzaSyB_AGctKnQMNfauJFGOaeCiyvrWnjpO7Os",
    authDomain: "straitmusic-apps.firebaseapp.com",
    projectId: "straitmusic-apps",
    storageBucket: "straitmusic-apps.appspot.com",
    messagingSenderId: "888636361002",
    appId: "1:888636361002:web:f86570d57c11ef0e88f653"
};

let database: Firestore; // Explicitly define as Firestore
let auth: Auth; // Explicitly define as Auth



const initializeFirebase = () => {
  if (!isFirebaseInitialized) {
    const store = initializeApp(FirebaseApp);
    database = getFirestore(store);
    auth = getAuth(store);
    isFirebaseInitialized = true;
  }
};


initializeFirebase();

export { auth, database };
