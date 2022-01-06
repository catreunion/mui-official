import React from "react"
import Box from "@mui/material/Box"
import { DataGrid } from "@mui/x-data-grid"
import { randomStatusOptions, randomPrice } from "@mui/x-data-grid-generator"

const rows = [
  {
    id: 1,
    status: randomStatusOptions(),
    subTotal: randomPrice(),
    total: randomPrice()
  },
  {
    id: 2,
    status: randomStatusOptions(),
    subTotal: randomPrice(),
    total: randomPrice()
  },
  {
    id: 3,
    status: randomStatusOptions(),
    subTotal: randomPrice(),
    total: randomPrice()
  }
]

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
})

const usdPrice = {
  type: "number",
  width: 130,
  valueFormatter: ({ value }) => currencyFormatter.format(Number(value)),
  cellClassName: "font-tabular-nums"
}

function D07custom() {
  return (
    <Box
      sx={{
        width: "100%",
        height: 300,
        "& .font-tabular-nums": {
          fontVariantNumeric: "tabular-nums"
        }
      }}
    >
      <DataGrid
        columns={[
          { field: "status", width: 130 },
          { field: "subTotal", ...usdPrice },
          { field: "total", ...usdPrice }
        ]}
        rows={rows}
      />
    </Box>
  )
}

export default D07custom
