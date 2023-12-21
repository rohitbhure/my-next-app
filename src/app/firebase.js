// firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  // Your Firebase config here
  apiKey: "AIzaSyAU641xsBN6FiJN-nP3I2CEDAf1E6ZYtBU",
  authDomain: "mynextapp-2e967.firebaseapp.com",
  projectId: "mynextapp-2e967",
  storageBucket: "mynextapp-2e967.appspot.com",
  messagingSenderId: "883669199759",
  appId: "1:883669199759:web:27395999316a53397d79fa",
  measurementId: "G-G2GRR7BP4M"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
