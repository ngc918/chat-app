import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyDK_-xHD57M375plPaziS8Up6mBr-dI3eE",
	authDomain: "chat-app-82fa9.firebaseapp.com",
	projectId: "chat-app-82fa9",
	storageBucket: "chat-app-82fa9.appspot.com",
	messagingSenderId: "390863543166",
	appId: "1:390863543166:web:52b2d66f10f199d83c312f",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
export const storage = getStorage(app);
