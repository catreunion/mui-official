import React from "react"
import { DataGrid } from "@mui/x-data-grid"

const rows = [
  {
    id: 2,
    taxRate: 0.2
  },
  {
    id: 3,
    taxRate: 0.3
  }
]

function D02valueParser() {
  return (
    <div style={{ width: "100%", height: 250 }}>
      <DataGrid
        columns={[
          {
            field: "taxRate",
            headerName: "Tax Rate",
            type: "number",
            width: 150,
            valueFormatter: params => {
              const valueFormatted = Number(params.value * 100).toLocaleString()
              return `${valueFormatted} %`
            },
            valueParser: value => Number(value) / 100
          }
        ]}
        rows={rows}
      />
    </div>
  )
}

export default D02valueParser

// Value formatter
// Convert a value before displaying it
// Only for rendering purposes
// Not for filtering and sorting
// Display a JavaScript Date object as a date string
// Display a Number as a formatted number (e.g. "1,000.50")
// Display a tax rate's decimal value (0.2) as a percentage (20%)

// Value parser
// The inverse of valueFormatter
// Support filtering, editing
// Parse date strings to JavaScript Date objects
// Parse formatted numbers ("1,000.50") into Number
