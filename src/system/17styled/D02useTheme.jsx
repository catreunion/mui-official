import React from "react"
// import { styled, createTheme, ThemeProvider } from "@mui/system"
import { styled, createTheme, ThemeProvider } from "@mui/material/styles"

const myTheme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      contrastText: "white"
    }
  }
})

const MyComponent = styled("div")(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius
}))

function D02useTheme() {
  return (
    <ThemeProvider theme={myTheme}>
      <MyComponent>Styled div with theme</MyComponent>
    </ThemeProvider>
  )
}

export default D02useTheme
