import { initializeApp,firebase} from 'firebase/app';
import { getFirestore } from "firebase/firestore";
// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";
import { getAuth } from "firebase/auth";

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAWxkvB8PXdm8UhmEMgXbyeW84UUnY6j2w",
  authDomain: "bitewise-f61d7.firebaseapp.com",
  projectId: "bitewise-f61d7",
  storageBucket: "bitewise-f61d7.appspot.com",
  messagingSenderId: "398295259334",
  appId: "1:398295259334:web:014e5e368db73c0362dfc7"
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
// export const auth = getAuth(app);
auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const db = getFirestore(app);
