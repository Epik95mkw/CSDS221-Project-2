import React from 'react';
import '../style.css';
import { Card, CardContent, Typography, Stack, Grid } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function Popup() {
  return (
    <Card className="popup">
      <CardContent sx={{ color: 'white', backgroundColor: 'primary.dark' }}>
        <Grid container direction="row" alignItems="center">
          <AddCircleIcon fontSize="inherit" />
          <Typography> example</Typography>
        </Grid>
      </CardContent>
      <CardContent>
        <Typography>Content</Typography>
      </CardContent>
    </Card>
  );
}
