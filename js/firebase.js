import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js';
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js';

const apikey = localStorage.getItem('API_KEY');

const firebaseConfig = {
  apiKey: apikey,
  authDomain: 'listapp-7e716.firebaseapp.com',
  projectId: 'listapp-7e716',
  storageBucket: 'listapp-7e716.firebasestorage.app',
  messagingSenderId: '805257599242',
  appId: '1:805257599242:web:1d85c44918e3040f54c2f3'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const historySnapshot = await getDocs(collection(db, 'history-list'));
const historyList = historySnapshot.docs.map((doc) => doc.data());

console.log(historyList);

const selfSnapshot = await getDocs(collection(db, 'self-list'));
const selfList = selfSnapshot.docs.map((doc) => doc.data());

console.log(selfList);

const partnerSnapshot = await getDocs(collection(db, 'partner-list'));
const partnerList = partnerSnapshot.docs.map((doc) => doc.data());

console.log(partnerList);

// ここから下、セッションストレージにデータを移動する

export default db;
