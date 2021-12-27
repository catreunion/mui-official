import React from "react"
// import { styled, createTheme, ThemeProvider } from "@mui/material/styles"
import styled from "@emotion/styled"

// const myTheme = createTheme({
//   palette: {
//     primary: {
//       main: "#1976d2",
//       contrastText: "white"
//     }
//   }
// })

const Child = styled.div`
  color: red;
`

const Parent = styled.div`
  ${Child} {
    color: green;
  }
`

function D10iAmLost() {
  return (
    <div>
      <Parent>
        <Child>Green because I am inside a Parent</Child>
      </Parent>
      <Child>Red because I am not inside a Parent</Child>
    </div>
  )
}

export default D10iAmLost
