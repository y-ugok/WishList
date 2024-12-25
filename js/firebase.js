import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js';
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc
} from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js';

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

export class Firebase {
  async loadDefaultList() {
    const historySnapshot = await getDocs(collection(db, 'history-list'));
    const historyList = historySnapshot.docs.map((doc) => ({ ...doc.data(), docID: doc.id }));

    console.log(historyList);
    sessionStorage.setItem('history-list', JSON.stringify(historyList));

    const selfSnapshot = await getDocs(collection(db, 'self-list'));
    const selfList = selfSnapshot.docs.map((doc) => ({ ...doc.data(), docID: doc.id }));

    console.log(selfList);
    sessionStorage.setItem('self-list', JSON.stringify(selfList));

    const partnerSnapshot = await getDocs(collection(db, 'partner-list'));
    const partnerList = partnerSnapshot.docs.map((doc) => ({ ...doc.data(), docID: doc.id }));

    console.log(partnerList);
    sessionStorage.setItem('partner-list', JSON.stringify(partnerList));
  }

  async addData(collectionName, data) {
    // console.log(collectionName);
    // console.log(data);
    const docRef = await addDoc(collection(db, collectionName), data);
    // console.log(docRef, docRef.id);
    return docRef.id;
  }

  async deleteData(collectionName, docID) {
    console.log(collectionName, docID);

    await deleteDoc(doc(db, collectionName, docID));
  }
}
