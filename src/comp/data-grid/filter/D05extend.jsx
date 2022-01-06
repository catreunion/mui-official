import React, { useMemo } from "react"
import { DataGrid, getGridNumericColumnOperators } from "@mui/x-data-grid"
import { useDemoData } from "@mui/x-data-grid-generator"
import InputAdornment from "@mui/material/InputAdornment"
import Box from "@mui/material/Box"

const priceColumnType = {
  extendType: "number",
  filterOperators: getGridNumericColumnOperators()
    .filter(operator => operator.value === ">" || operator.value === "<")
    .map(operator => {
      return {
        ...operator,
        InputComponentProps: {
          InputProps: {
            startAdornment: <InputAdornment position="start">$</InputAdornment>
          }
        }
      }
    })
}

function D05extend() {
  const { data } = useDemoData({ dataSet: "Commodity", rowLength: 50 })
  const columns = useMemo(() => {
    if (data.columns.length > 0) {
      const visibleFields = ["desk", "commodity", "totalPrice"]
      const mappedColumns = data.columns.map(dataColumn => {
        const mappedColumn = {
          ...dataColumn,
          hide: visibleFields.indexOf(dataColumn.field) === -1
        }

        if (mappedColumn.field === "totalPrice") {
          mappedColumn.type = "price"
          mappedColumn.width = 180
        }
        return mappedColumn
      })
      return mappedColumns
    }
    return []
  }, [data.columns])

  return (
    <Box sx={{ width: "100%", height: 400 }}>
      <DataGrid
        rows={data.rows}
        columns={columns}
        columnTypes={{ price: priceColumnType }}
        initialState={{
          filter: {
            filterModel: {
              items: [{ columnField: "totalPrice", value: "3000000", operatorValue: ">" }]
            }
          }
        }}
      />
    </Box>
  )
}

export default D05extend
