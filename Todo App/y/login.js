// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  update
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjJ5-4G2p2I1FZqEkbgEpo6eVLKL4RWcM",
  authDomain: "database-practice-mode.firebaseapp.com",
  databaseURL: "https://database-practice-mode-default-rtdb.firebaseio.com",
  projectId: "database-practice-mode",
  storageBucket: "database-practice-mode.appspot.com",
  messagingSenderId: "986373616402",
  appId: "1:986373616402:web:386a9cc8fecf2cf0cbb9cb",
  measurementId: "G-YWDN1WQZB7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

let signUp = document.querySelector(".signUpButton");
let login = document.querySelector(".LoginButton");

signUp.addEventListener("click", (e) => {

  var name = document.querySelector(".name").value;
  var email = document.querySelector(".email").value;
  var password = document.querySelector(".password").value;

  createUserWithEmailAndPassword(auth, email, password)

    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      set(ref(database, "user/" + user.uid), {
        userName: name,
        userEmail: email,
        userPassword: password
      });

      // apna code kerna hy!!!!!
      alert("use created!");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      alert(errorMessage);
    });
});

login.addEventListener("click", (e) => {
  var email = document.querySelector(".email").value;
  var password = document.querySelector(".password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      const dt = new Date();
      update(ref(database, "user/" + user.uid), {
        last_login: dt,
      });

      // apna code aaye ga idher!!!
      alert("user loged in!");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});

const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

logout.addEventListener("click", () => {
  
  signOut(auth)
  .then(() => {
        // Sign-out successful.
        alert("user loged out!")
      })
      .catch((error) => {
        // An error happened.
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  });
