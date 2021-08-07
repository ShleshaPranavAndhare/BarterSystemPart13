import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDSiRw7JKyv41yhSqwexbbT-VWFhBaonNY",
    authDomain: "booksanta-b9942.firebaseapp.com",
    projectId: "booksanta-b9942",
    storageBucket: "booksanta-b9942.appspot.com",
    messagingSenderId: "349470624802",
    appId: "1:349470624802:web:fac3e3438f59b4a93a4e7b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
