// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoVmNSwgHWhBNCU69-p-oYPqAaeR5299k",
  authDomain: "chef-recipe-hunter-clinet.firebaseapp.com",
  projectId: "chef-recipe-hunter-clinet",
  storageBucket: "chef-recipe-hunter-clinet.appspot.com",
  messagingSenderId: "237242526099",
  appId: "1:237242526099:web:687e7afc23dd2cb0032066"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;