import firebase from 'firebase/app'
import 'firebase/firestore'


var config = {
    apiKey: "AIzaSyDrAWHtOfxFhjJC2hkARdyJMewO9gpzpw4",
    authDomain: "vuetify-project-todo.firebaseapp.com",
    databaseURL: "https://vuetify-project-todo.firebaseio.com",
    projectId: "vuetify-project-todo",
    storageBucket: "vuetify-project-todo.appspot.com",
    messagingSenderId: "943307476671",
    appId: "1:943307476671:web:72bda140b9566a3e56c00a",
    measurementId: "G-7PNW4BNNSM"
  };
  firebase.initializeApp(config);

  const db = firebase.firestore();
  
  db.settings({timestampsInSnapshots: true});

  export default db;