import  firebase from 'firebase';
import react from 'react';
const firebaseConfig = {
    apiKey: "AIzaSyAO1-wnJ5p8-r50ypEnCO7TkOAoa-xnkCs",
    authDomain: "chatmate-ce6a6.firebaseapp.com",
    projectId: "chatmate-ce6a6",
    storageBucket: "chatmate-ce6a6.appspot.com",
    messagingSenderId: "578140438166",
    appId: "1:578140438166:web:3c53d0553d096333380cb7"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {db,auth,provider};