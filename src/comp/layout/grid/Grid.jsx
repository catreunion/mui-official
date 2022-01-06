import React from "react"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import D02multiple from "./D02multiple"
import D04spacing from "./D04spacing"
import D05responsive from "./D05responsive"
import D06autoLayout from "./D06autoLayout"
import D07variable from "./D07variable"
import D08complex from "./D08complex"
import D09nested from "./D09nested"
import D10columns from "./D10columns"
import D11limitations from "./D11limitations"
import D12final from "./D12final"
import N01 from "./N01"

function Grid() {
  return (
    <>
      <Typography component="div">
        <Box sx={{ textAlign: "center", m: 1 }}>x</Box>
      </Typography>

      <D02multiple />
      <D04spacing />
      <D05responsive />
      <D06autoLayout />
      <D07variable />
      <D08complex />
      <D09nested />
      <D10columns />
      <D11limitations />
      <D12final />
      <N01 />
    </>
  )
}

export default Grid
