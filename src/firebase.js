
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCrN178ogsHF32l0jycy1xpB578oCZhmGs",
    authDomain: "mendwebbackend.firebaseapp.com",
    projectId: "mendwebbackend",
    storageBucket: "mendwebbackend.appspot.com",
    messagingSenderId: "236115014627",
    appId: "1:236115014627:web:646a709140dd8ef474e6d6",
    measurementId: "G-1Z0VB8BYBT"
};

export const app = initializeApp(firebaseConfig);