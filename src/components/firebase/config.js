// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {GoogleAuthProvider, getAuth} from 'firebase/auth';
import {getFirestore, collection, addDoc} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDJLJDz4zhGzbMcGxDxGPYcrFuqw-hlRjo',
  authDomain: 'tubespmob.firebaseapp.com',
  projectId: 'tubespmob',
  storageBucket: 'tubespmob.appspot.com',
  messagingSenderId: '249075303259',
  appId: '1:249075303259:web:5e42b4ab1d4dfa8a3e907e',
  measurementId: 'G-HMKSZYRCDQ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider(app);
const auth = getAuth(app);
const db = getFirestore(app);

export {app, db, analytics, provider, auth, collection, addDoc, getFirestore};
