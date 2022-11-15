import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXEywxrkxjEIAe7LmGkVy4zXiT8gocNns",
  authDomain: "reactcoderhouse-16925.firebaseapp.com",
  projectId: "reactcoderhouse-16925",
  storageBucket: "reactcoderhouse-16925.appspot.com",
  messagingSenderId: "790852771040",
  appId: "1:790852771040:web:825709e3f97c03a7ef0485",
};

const app = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore(app);
