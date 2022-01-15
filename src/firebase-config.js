import { initializeApp } from "firebase/app"
import { getFirestore, collection } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyB7ZBbLLgc7CAg-NKHxF-8Y0NXZATKJrGs",
  authDomain: "kumar-38d7b.firebaseapp.com",
  projectId: "kumar-38d7b",
  storageBucket: "kumar-38d7b.appspot.com",
  messagingSenderId: "651517477302",
  appId: "1:651517477302:web:db1c3645347de2780a8117"
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const colorsRef = collection(db, "colors")

const storage = getStorage(app)

export { app, db, colorsRef, storage }
