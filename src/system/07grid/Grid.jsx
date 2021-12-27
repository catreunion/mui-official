import React from "react"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import D01display from "./D01display"
import D02gridTemplateRows from "./D02gridTemplateRows"
import D03gridTemplateColumns from "./D03gridTemplateColumns"
import D04gap from "./D04gap"
import D05rowGapColumnGap from "./D05rowGapColumnGap"
import D06gridTemplateAreas from "./D06gridTemplateAreas"
import D07gridAutoColumns from "./D07gridAutoColumns"
import D08gridAutoRows from "./D08gridAutoRows"
import D09gridAutoFlow from "./D09gridAutoFlow"

function GridDemo() {
  return (
    <>
      <Typography component="div">
        <Box sx={{ textAlign: "center", m: 1 }}>Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive grid utilities.</Box>
      </Typography>

      <D01display />
      <D02gridTemplateRows />
      <D03gridTemplateColumns />
      <D04gap />
      <D05rowGapColumnGap />
      <D06gridTemplateAreas />
      <D07gridAutoColumns />
      <D08gridAutoRows />
      <D09gridAutoFlow />
    </>
  )
}

export default GridDemo
