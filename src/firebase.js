// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDWhWhvKJeGqFC1UsWS-xUs385oCa-M23E',
  authDomain: 'react-food-delivery-app-73a61.firebaseapp.com',
  projectId: 'react-food-delivery-app-73a61',
  storageBucket: 'react-food-delivery-app-73a61.appspot.com',
  messagingSenderId: '173346167193',
  appId: '1:173346167193:web:cf08d425a7444852365b08',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
