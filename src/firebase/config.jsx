// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7UUzOgzaqgNu-qiKJ68Ysq05-tePIsFA",
    authDomain: "kingdom-store-849e7.firebaseapp.com",
    projectId: "kingdom-store-849e7",
    storageBucket: "kingdom-store-849e7.appspot.com",
    messagingSenderId: "269056417392",
    appId: "1:269056417392:web:de365c02f7b03ece129eb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const fireStoreInit = () => app