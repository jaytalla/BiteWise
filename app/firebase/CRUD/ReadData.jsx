// FetchData.js
import { db } from '../firebaseConfig.js';
import { collection, getDocs } from 'firebase/firestore';

const fetchAllData = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching documents: ", error);
    throw new Error("Error fetching documents");
  }
};

export { fetchAllData };
