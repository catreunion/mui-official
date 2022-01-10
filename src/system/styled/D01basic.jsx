import React from "react"
import { styled } from "@mui/system"

const MyComponent = styled("div")({
  color: "darkslategray",
  backgroundColor: "aliceblue",
  padding: 8,
  borderRadius: 4
})

function D01basic() {
  return <MyComponent>Styled div</MyComponent>
}

export default D01basic
