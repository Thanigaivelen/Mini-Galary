import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCgzD7LzoK23menIAS3G3sso1l-f6WdgpY",
  authDomain: "gallary-app-c669a.firebaseapp.com",
  projectId: "gallary-app-c669a",
  storageBucket: "gallary-app-c669a.appspot.com",
  messagingSenderId: "794743781101",
  appId: "1:794743781101:web:37b2bcd5e503ce47803ee4"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };