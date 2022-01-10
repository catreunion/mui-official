import React from "react"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import D01display from "./D01display"
import D02flexDirection from "./D02flexDirection"
import D03flexWrap from "./D03flexWrap"
import D04justifyContent from "./D04justifyContent"
import D05alignItems from "./D05alignItems"
import D06alignContent from "./D06alignContent"
import D07order from "./D07order"
import D08flexGrow from "./D08flexGrow"
import D09flexShrink from "./D09flexShrink"
import D10alignSelf from "./D10alignSelf"

function Flexbox() {
  return (
    <>
      <Typography component="div">
        <Box sx={{ textAlign: "center", m: 1 }}>Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities.</Box>
      </Typography>

      <D01display />
      <D02flexDirection />
      <D03flexWrap />

      {/* horizontal */}
      <D04justifyContent />

      {/* vertical */}
      <D05alignItems />
      <D06alignContent />

      <D07order />
      <D08flexGrow />
      <D09flexShrink />
      <D10alignSelf />
    </>
  )
}

export default Flexbox
