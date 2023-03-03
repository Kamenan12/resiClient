import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import {
  initializeAuth,
  getReactNativePersistence
} from 'firebase/auth/react-native';
import {getFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage"; 




export const firebaseConfig = {
    apiKey: "AIzaSyAgwmbNxFHn2Ya1tK4aojLmp5DFOyqLc-I",
    authDomain: "dbtestresi.firebaseapp.com",
    projectId: "dbtestresi",
    storageBucket: "dbtestresi.appspot.com",
    messagingSenderId: "336163662418",
    appId: "1:336163662418:web:385041d443c5866bb00d8b"
  };
  

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
export const db = getFirestore();
export const storage = getStorage();