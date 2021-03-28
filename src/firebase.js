import firebase from 'firebase/app'
require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyC33vSGPnxFqPFd1zCAHVSe-CSlhjOAZ6c",
  authDomain: "micropolitica-mx.firebaseapp.com",
  projectId: "micropolitica-mx",
  storageBucket: "micropolitica-mx.appspot.com",
  messagingSenderId: "793433666681",
  appId: "1:793433666681:web:dd791bcaac99fb9e9010a8"
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export {
  firebase,
  firestore
}
