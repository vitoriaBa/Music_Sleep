import { initializeApp } from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD7VtFpSaPPy7jpzz39nnhK2y53raQGDI4',
  authDomain: 'fflowerbd.firebaseapp.com',
  projectId: 'fflowerbd',
  storageBucket: 'fflowerbd.appspot.com',
  messagingSenderId: '410441648710',
  appId: '1:410441648710:web:72f8d9f5792ebd1d2b9847',
  measurementId: 'G-109PF6WBGQ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
