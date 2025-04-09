// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAib9xogqMLuKMfd5438cES-pS7g_xxp58",
  authDomain: "aularodrigo-e2fe6.firebaseapp.com",
  projectId: "aularodrigo-e2fe6",
  storageBucket: "aularodrigo-e2fe6.firebasestorage.app",
  messagingSenderId: "952795222281",
  appId: "1:952795222281:web:fe2d0066cd7210264bc3d8"
};

const app = initializeApp(firebaseConfig);

// Inicializa o Auth com persistência no AsyncStorage
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };