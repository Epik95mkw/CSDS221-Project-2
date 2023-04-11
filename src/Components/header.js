import React from 'react';
import '../style.css';
import { Typography, Card, CardContent, Grid, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const header = (
  <CardContent sx={{ color: 'white', backgroundColor: 'primary.dark' }}>
    <Grid container className="centered">
      <Grid item xs></Grid>
      <Grid item xs={6} className="centered">
        <MenuIcon />
        <Typography>&nbsp;FRAMEWORKS</Typography>
      </Grid>
      <Grid item xs className="align-right">
        <Button variant="contained">
          <AddCircleIcon />
          &nbsp;ADD
        </Button>
      </Grid>
    </Grid>
  </CardContent>
);

export default function Header() {
  return (
    <Card>
      {header}
      <CardContent>
        <Typography>content</Typography>
      </CardContent>
    </Card>
  );
}
