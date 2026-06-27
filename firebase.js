import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyCEL_6w7HB43up4n4efgZo43zSHIMpVSTo",
  authDomain: "z-maxx-paid-scrim.firebaseapp.com",
  databaseURL: "https://z-maxx-paid-scrim-default-rtdb.firebaseio.com",
  projectId: "z-maxx-paid-scrim",
  storageBucket: "z-maxx-paid-scrim.firebasestorage.app",
  messagingSenderId: "283601239964",
  appId: "1:283601239964:web:0811f805c817fa84209259"
};

const app = initializeApp(firebaseConfig);

console.log("Firebase Connected Successfully!");
