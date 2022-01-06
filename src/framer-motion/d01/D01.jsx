import React, { useState } from "react"
import { motion } from "framer-motion"
import Refresh from "./Refresh"
import "./styles.css"

function D01() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Refresh onClick={() => setCount(count + 1)} />
      <div className="example-container">
        <motion.div animate={{ scale: 2 }} />
      </div>
    </>
  )
}

export default D01
