import React from 'react';
import '../style.css';
import { Typography, CardContent, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from './button.js';

export default function Header(props) {
  const onAddClick = props.onAddClick;

  return (
    <CardContent sx={{ color: 'white', backgroundColor: 'primary.dark' }}>
      <Grid container>
        <Grid item xs></Grid>
        <Grid item xs={6} className="title">
          <MenuIcon />
          <Typography variant="h6">&nbsp;FRAMEWORKS</Typography>
        </Grid>
        <Grid item xs align="right">
          <IconButton icon={AddCircleIcon} text="add" onClick={onAddClick} />
        </Grid>
      </Grid>
    </CardContent>
  );
}
