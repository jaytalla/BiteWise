// AuthService.js
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const loginUser = async (username, password) => {
  if (!username || !password) {
    alert("Please fill up the username and password. Then click login");
    return { success: false, message: 'Please enter username and password' };
  }

  try {
    // Query the users collection to find the user by username
    const usersCollection = collection(db, 'users');
    const q = query(usersCollection, where('username', '==', username));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log('No matching user found');
      return { success: false, message: 'No matching user found' };
    }

    let userDoc = null;
    querySnapshot.forEach(doc => {
      const userData = doc.data();
      if (userData.password === password) { // For demonstration only, use hashed passwords in production
        userDoc = doc;
      }
    });

    if (!userDoc) {
      console.log('Incorrect password');
      return { success: false, message: 'Incorrect password' };
    }

    const userData = userDoc.data();
    console.log('User authenticated successfully userID: ', userData.userID);

    // Ensure userID is not undefined
    if (userData.userID) {
      await AsyncStorage.setItem('userID', userData.userID);
      await AsyncStorage.setItem('userName', userData.username);
      await AsyncStorage.setItem('userProfile', userData.profilePicture);
      console.log('UserID saved to AsyncStorage');
    } else {
      console.error('userID is undefined');
      return { success: false, message: 'UserID is undefined' };
    }

    router.replace("/(tabs)/dashboard");
    return { success: true, user: userData };
  } catch (error) {
    console.error('Error logging in: ', error);
    return { success: false, message: 'Error logging in' };
  }
};

export { loginUser };
