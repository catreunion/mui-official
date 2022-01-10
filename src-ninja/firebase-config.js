import { useEffect, useState } from "react"
import { initializeApp } from "firebase/app"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyB7ZBbLLgc7CAg-NKHxF-8Y0NXZATKJrGs",
  authDomain: "kumar-38d7b.firebaseapp.com",
  projectId: "kumar-38d7b",
  storageBucket: "kumar-38d7b.appspot.com",
  messagingSenderId: "651517477302",
  appId: "1:651517477302:web:db1c3645347de2780a8117"
}

export const app = initializeApp(firebaseConfig)

export const authentication = getAuth()

export function login(email, password) {
  return signInWithEmailAndPassword(authentication, email, password)
}

export function signup(email, password) {
  return createUserWithEmailAndPassword(authentication, email, password)
}

export function useAuth() {
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    const unsub = onAuthStateChanged(authentication, user => setCurrentUser(user))
    return unsub
  }, [])

  return currentUser
}

export function logout() {
  return signOut(authentication)
}

export const db = getFirestore(app)

// get an instance of the Storage service
export const storage = getStorage(app)

export async function upload(file, currentUser, setLoading) {
  const fileRef = ref(storage, currentUser.uid + ".png")

  setLoading(true)

  const snapshot = await uploadBytes(fileRef, file)
  const photoURL = await getDownloadURL(fileRef)

  updateProfile(currentUser, { photoURL })

  setLoading(false)
  alert("Uploaded file!")
}

// export {app, db, storage}
