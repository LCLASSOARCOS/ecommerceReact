import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAZ1kn0IgMANkSI1j5k6pkJDK08q7zsMxE",
    authDomain: "ilass-fb5f2.firebaseapp.com",
    projectId: "ilass-fb5f2",
    storageBucket: "ilass-fb5f2.appspot.com",
    messagingSenderId: "416471491506",
    appId: "1:416471491506:web:d1a5c0f6a8fb47d10bbaab"
  };

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)