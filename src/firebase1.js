// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYI6vS8ioYInQNj0EviLSBhaGzd13tMlQ",
  authDomain: "clone-sk-503fc.firebaseapp.com",
  projectId: "clone-sk-503fc",
  storageBucket: "clone-sk-503fc.appspot.com",
  messagingSenderId: "703368159167",
  appId: "1:703368159167:web:4bbcd96c8cfad6d1fd0b0a",
  measurementId: "G-CQWYCF9WJM"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};