import firebase from 'firebase/app'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKvdKRQHIphpltQjZQVRoZETzO2w6YZGY",
  authDomain: "cooking-ninja-site-3a66f.firebaseapp.com",
  projectId: "cooking-ninja-site-3a66f",
  storageBucket: "cooking-ninja-site-3a66f.appspot.com",
  messagingSenderId: "309130955216",
  appId: "1:309130955216:web:2c2ee3131f48d97f9711d5",
  measurementId: "G-9S7EWJ01G5"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }