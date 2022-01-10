import React, { useState } from "react"
import { Stack, Pagination, Typography } from "@mui/material"
import PaginationItem from "@mui/material/PaginationItem"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

function D02customize() {
  const [page, setPage] = useState(1)

  const handleChange = (event, value) => {
    setPage(value)
  }

  return (
    <>
      <Stack spacing={2}>
        <Pagination count={10} renderItem={item => <PaginationItem components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }} {...item} />} />
      </Stack>

      <Stack spacing={2}>
        <Typography>Specify how many digits to display either side of current page with the siblingRange prop, and adjacent to the start and end page number with the boundaryRange prop.</Typography>
        <Pagination count={11} defaultPage={6} siblingCount={0} />
        <Pagination count={11} defaultPage={6} /> {/* Default ranges */}
        <Pagination count={11} defaultPage={6} siblingCount={0} boundaryCount={2} />
        <Pagination count={11} defaultPage={6} boundaryCount={2} />
      </Stack>

      <Stack spacing={2}>
        <Typography>Page: {page}</Typography>
        <Pagination count={10} page={page} onChange={handleChange} />
      </Stack>
    </>
  )
}

export default D02customize
