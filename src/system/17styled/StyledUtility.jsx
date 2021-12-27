import React from "react"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
// import D01basic from "./D01basic"
// import D02useTheme from "./D02useTheme"
// import D03customComp from "./D03customComp"
import D10iAmLost from "./D10iAmLost"

function StyledUtility() {
  return (
    <>
      <Typography variant="h4" component="div">
        <Box sx={{ textAlign: "center", m: 1 }}>Styled Demo</Box>
      </Typography>

      {/* <D01basic /> */}
      {/* <D02useTheme /> */}
      {/* <D03customComp /> */}
      <D10iAmLost />
    </>
  )
}

export default StyledUtility
