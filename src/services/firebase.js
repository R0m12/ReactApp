import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/messaging";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfkIfQGrcvdm2Vswpt6SDqG7IIwpANVtQ",
  authDomain: "romreactapp.firebaseapp.com",
  projectId: "romreactapp",
  storageBucket: "romreactapp.appspot.com",
  messagingSenderId: "1041977475214",
  appId: "1:1041977475214:web:c12d31aa855930efdb89df"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

// const messaging = firebase.messaging();
// const firestore = firebase.firestore();

auth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log("User is signed in");
    console.log(user);
  } else {
    // User is signed out
    console.log("User is signed out");
  }
});

export const currentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};

export const isLogged = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe();
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    }, reject);
  });
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
