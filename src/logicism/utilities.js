import { db, colorsRef } from "../firebase-config"
import { doc, setDoc, deleteDoc, query, where, getDocs } from "firebase/firestore"

const editColor = async id => {
  console.log("The ID of the selected color is: ", id)
  const name = prompt("Edit color name: ")
  const value = prompt("Edit color value: ")
  const colorRef = doc(db, "colors", id)
  await setDoc(colorRef, { colorName: name, colorValue: value })
}

const deleteColor = async id => {
  const colorRef = doc(db, "colors", id)
  await deleteDoc(colorRef)
}

const qDeleteColor = async () => {
  const name = prompt("Which color you want to delete? ")
  const q = query(colorsRef, where("colorName", "==", name))
  const snapshot = await getDocs(q)

  const results = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))

  results.forEach(async result => {
    const docRef = doc(db, "colors", result.id)
    await deleteDoc(docRef)
  })
}

export { editColor, deleteColor, qDeleteColor }
