import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getStorage } from "firebae/storage"
import { getFirestore } from "firebae/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyCMp_9UMABSylLVdC0AzMj2JS0m1QCZZl0",
    authDomain: "auth-blog-c1907.firebaseapp.com",
    projectId: "auth-blog-c1907",
    storageBucket: "auth-blog-c1907.appspot.com",
    messagingSenderId: "1045787929005",
    appId: "1:1045787929005:web:18c8ec2fbe447ac5555924",
    measurementId: "G-T27JTV4CPG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore(app);
