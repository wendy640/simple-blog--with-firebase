// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBWUP_AgmWBFpYaAmu1OrFOHlz_hl-CMFk',
	authDomain: 'sampleblog-4ccaf.firebaseapp.com',
	projectId: 'sampleblog-4ccaf',
	storageBucket: 'sampleblog-4ccaf.appspot.com',
	messagingSenderId: '13656943119',
	appId: '1:13656943119:web:68cbcdd32fd5c4ddae517a'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()