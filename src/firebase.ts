import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdqm_krg81ebXXLAFlTl2r0ix52oXlxVI",
  authDomain: "hallsnas-a6f22.firebaseapp.com",
  projectId: "hallsnas-a6f22",
  storageBucket: "hallsnas-a6f22.appspot.com",
  messagingSenderId: "697366985138",
  appId: "1:697366985138:web:609132de4d470d17270cab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const storage = getStorage(app);
const firestore = getFirestore(app);

// Export services
export { storage, firestore };