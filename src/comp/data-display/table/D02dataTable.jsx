import React from "react"
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid"

// configure the columns
// mapped to rows through the field property
// const columns: GridColDef[] = [
const columns = [
  { field: "id", headerName: "ID", width: 60 },
  { field: "lastName", headerName: "Last Name", width: 130 },
  { field: "firstName", headerName: "First Name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 60
  },
  {
    field: "fullName",
    headerName: "Full Name",
    description: "description",
    sortable: false,
    width: 260,
    valueGetter: params => `${params.getValue(params.id, "firstName") || ""} ${params.getValue(params.id, "lastName") || ""}`
  }
]

// provide rows
// Rows are key-value pair objects, mapping column names as keys with their values
// const rows: GridRowsProp = [
const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 }
]

function D02dataTable() {
  return (
    <div style={{ width: "100%", height: 400 }}>
      <DataGrid columns={columns} rows={rows} pageSize={5} checkboxSelection />
    </div>
  )
}

export default D02dataTable
