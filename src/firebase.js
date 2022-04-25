import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDuui049597z7OIdxww_RX0jn16Zl9Nu_Y",
    authDomain: "netflix-app2-53edb.firebaseapp.com",
    projectId: "netflix-app2-53edb",
    storageBucket: "netflix-app2-53edb.appspot.com",
    messagingSenderId: "889224754922",
    appId: "1:889224754922:web:5bba3c99411539c94c0993"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export {auth}
  export default db;