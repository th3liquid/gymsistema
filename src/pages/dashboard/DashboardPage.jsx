import { Card, Grid, Typography } from "@mui/material";
import React from "react";
import { NavBar } from "../../ui/NavBar";

export const DashboardPage = () => {
  return (
    <>
      <Grid container xs={12}>
        <Grid item xs={12}>
          <Card sx={{margin: '5px'}}>
            <Typography variant="h4">Dashboard Page</Typography>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
