// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyC_OLPcy8r0iFehqcqOnB15u8--6eOHfhc',
	authDomain: 'velox-management-system.firebaseapp.com',
	projectId: 'velox-management-system',
	storageBucket: 'velox-management-system.appspot.com',
	messagingSenderId: '627640240528',
	appId: '1:627640240528:web:ce5b8c9c498a46e4034b15',
	measurementId: 'G-3YN864PD47',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
