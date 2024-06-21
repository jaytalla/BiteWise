// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
const firebaseConfig = {
  apiKey: "AIzaSyAWxkvB8PXdm8UhmEMgXbyeW84UUnY6j2w",
  authDomain: "bitewise-f61d7.firebaseapp.com",
  projectId: "bitewise-f61d7",
  storageBucket: "bitewise-f61d7.appspot.com",
  messagingSenderId: "398295259334",
  appId: "1:398295259334:web:014e5e368db73c0362dfc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { db, auth };
