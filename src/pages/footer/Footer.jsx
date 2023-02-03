import { Grid, Typography } from '@mui/material'
import React from 'react'

export const Footer = () => {
  return (
    <Grid sx={{backgroundColor: '#1976D2'}} container>
        <Grid item sx={{ padding: '20px', display: 'flex'}} xs={12}>
            <Grid item sx={{display: 'flex', justifyContent: 'start'}} xs={6}>
                <Typography sx={{color: 'white'}} >Sistema Gym Copyright 2023</Typography>
            </Grid>
            <Grid sx={{display: 'flex', justifyContent: 'end'}} item xs={6}>
            <Typography sx={{color: 'white'}}>By Kawwo MKT</Typography>

            </Grid>
        </Grid>

    </Grid>
  )
}
