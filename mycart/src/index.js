import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration

  const firebaseConfig = {
    apiKey: "AIzaSyBZ5siAVVqKbdnKfdlqZhP43JiSuxW88bc",
    authDomain: "cart-c2a30.firebaseapp.com",
    projectId: "cart-c2a30",
    storageBucket: "cart-c2a30.appspot.com",
    messagingSenderId: "137365246753",
    appId: "1:137365246753:web:faa7f59e4753a9d89ba460",
    measurementId: "G-9H3LB2G3PB"
  };
  


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
