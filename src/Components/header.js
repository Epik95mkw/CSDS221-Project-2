import React from 'react';
import '../style.css';
import { Typography, CardContent, Grid, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function Header(props) {
  const addButton = (
    <Button
      variant="contained"
      startIcon={}
      onClick={props.openPopup}
    >
      <AddCircleIcon fontSize="small" />
      <Typography>add</Typography>
    </Button>
  );

  return (
    <CardContent sx={{ color: 'white', backgroundColor: 'primary.dark' }}>
      <Grid container>
        <Grid item xs></Grid>
        <Grid item xs={6} className="title">
          <MenuIcon />
          <Typography variant="h6">&nbsp;FRAMEWORKS</Typography>
        </Grid>
        <Grid item xs align="right">
        {addButton}
        </Grid>
      </Grid>
    </CardContent>
  );
}
