import { useState, useEffect } from "react"
import { storage, db } from "../src/useFirestore"
import { ref } from "firebase/storage"

const useStorage = file => {
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(null)
  const [url, setUrl] = useState(null)

  useEffect(() => {
    // references
    const storageRef = ref(storage, file)
    const collectionRef = db.collection("images")

    storageRef.put(file).on(
      "state_changed",
      snap => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
        setProgress(percentage)
      },
      err => {
        setError(err)
      },
      async () => {
        const url = await storageRef.getDownloadURL()
        const createdAt = timestamp()
        await collectionRef.add({ url, createdAt })
        setUrl(url)
      }
    )
  }, [file])

  return { progress, url, error }
}

export default useStorage
