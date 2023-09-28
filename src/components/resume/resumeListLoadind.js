import { Grid, Paper, Skeleton, Typography } from '@mui/material'
import React from 'react'

const ResumeListLoading = () => {
  return (
<Grid container spacing={2}>
    <Grid item xs={12}>
    <Paper elevation={3} padding={"10px 10px 10px 10px"}>
        <Skeleton variant="square" borderRadius={2}  width={40} height={40} padding={'10px 10px 10px 10px' }/>
        <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
         </Paper>
    </Grid>
    <Grid item xs={3}>
        <Paper elevation={3}>
        <Skeleton variant="square" borderRadius={2}  width={40} height={40} />
        </Paper>
    </Grid>

</Grid>
  )
}

export default ResumeListLoading