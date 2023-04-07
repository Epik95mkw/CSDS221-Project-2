import React from 'react';
import '../style.css';
import { Typography, Card, CardContent, Grid, Button } from '@mui/material';
import { MenuIcon } from '@mui/icons-material';

const header = (
  <CardContent sx={{ color: 'white', backgroundColor: 'primary.dark' }}>
    <Grid container className="centered">
      <Grid item xs></Grid>
      <Grid item xs={6} className="centered">
        <MenuIcon />
        <Typography>FRAMEWORKS</Typography>
      </Grid>
      <Grid item xs className="align-right">
        <Button variant="contained">ADD</Button>
      </Grid>
    </Grid>
  </CardContent>
);

export default function Table() {
  return (
    <Card>
      {header}
      <CardContent>
        <Typography>content</Typography>
      </CardContent>
    </Card>
  );
}
