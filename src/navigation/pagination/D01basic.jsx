import React from "react"
import Stack from "@mui/material/Stack"
import Pagination from "@mui/material/Pagination"

function D01basic() {
  return (
    <>
      <Stack spacing={2}>
        <Pagination count={10} />
        <Pagination count={10} color="primary" />
        <Pagination count={10} color="secondary" />
        <Pagination count={10} disabled />
      </Stack>

      <Stack spacing={2}>
        <Pagination count={10} variant="outlined" />
        <Pagination count={10} variant="outlined" color="primary" />
        <Pagination count={10} variant="outlined" color="secondary" />
        <Pagination count={10} variant="outlined" disabled />
      </Stack>

      <Stack spacing={2}>
        <Pagination count={10} shape="rounded" />
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Stack>

      <Stack spacing={2}>
        <Pagination count={10} size="small" />
        <Pagination count={10} />
        <Pagination count={10} size="large" />
      </Stack>

      <Stack spacing={2}>
        <Pagination count={10} showFirstButton showLastButton />
        <Pagination count={10} hidePrevButton hideNextButton />
      </Stack>
    </>
  )
}

export default D01basic
