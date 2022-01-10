import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCXa5xKWd9fbyqbrYv-_W9QdFzmD1-8dOI",
  authDomain: "pilot-aa630.firebaseapp.com",
  projectId: "pilot-aa630",
  storageBucket: "pilot-aa630.appspot.com",
  messagingSenderId: "256167151177",
  appId: "1:256167151177:web:162b3abf2e6c92aa472198"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)

export { app, db, storage }
