// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: 'AIzaSyBNNWm4UNwGNPA2KmrpnWPu10dYHAfmAKE',
  authDomain: 'food-delivery-d31d5.firebaseapp.com',
  projectId: 'food-delivery-d31d5',
  storageBucket: 'food-delivery-d31d5.appspot.com',
  messagingSenderId: '766327173657',
  appId: '1:766327173657:web:ede2418b8d7471a9187088',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const db = getFirestore(app);

const firestore = getFirestore(app);

const storage = getStorage(app);

export { db, firestore, storage };
