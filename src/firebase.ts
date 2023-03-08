import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // New import

const firebaseConfig = {
  apiKey: 'AIzaSyANfwPlIWzYio6HsbvJFIYv4MGeGzEGzIs',
  authDomain: 'kicks-mobile.firebaseapp.com',
  projectId: 'kicks-mobile',
  storageBucket: 'kicks-mobile.appspot.com',
  messagingSenderId: '326365226944',
  appId: '1:326365226944:web:242a13b5bbe47baaebca25'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
