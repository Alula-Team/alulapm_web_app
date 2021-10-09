import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDWdcgwt4z8h6oVXxsOshaIbzDZjZIw8CI",
  authDomain: "alula-5e6c6.firebaseapp.com",
  projectId: "alula-5e6c6",
  storageBucket: "alula-5e6c6.appspot.com",
  messagingSenderId: "633732970516",
  appId: "1:633732970516:web:b4cf1643121fa99a7acf01"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)