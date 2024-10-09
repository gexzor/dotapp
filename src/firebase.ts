import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCyNXaEz1o2ZGFtQXkVOQSty_xaUCYfGB8',
  authDomain: 'dotapp-4f2ed.firebaseapp.com',
  projectId: 'dotapp-4f2ed',
  storageBucket: 'dotapp-4f2ed.appspot.com',
  messagingSenderId: '1076863926835',
  appId: '1:1076863926835:web:f7401922b534c01e615946',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
