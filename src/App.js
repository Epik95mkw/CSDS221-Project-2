import React from 'react';
import './style.css';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Table from './Components/table.js';
import Popup from './Components/popup.js';
import IconButton from './Components/button.js';

export default function App() {
  const [data, setData] = React.useState([['title1', 'desc1', 'dead', 'prrr']]);
  const insertEntry = (rowData) => setData(data.concat([rowData]));
  const deleteEntry = (rowData) => setData(data.filter((r, i) => r != rowData));

  const [open, setOpen] = React.useState(false);
  const openPopup = () => setOpen(true);
  const closePopup = () => setOpen(false);

  return (
    <Card>
      <CardContent sx={{ color: 'white', backgroundColor: 'primary.dark' }}>
        <Grid container>
          <Grid item xs></Grid>
          <Grid item xs={6} className="title">
            <MenuIcon />
            <Typography variant="h6">&nbsp;FRAMEWORKS</Typography>
          </Grid>
          <Grid item xs align="right">
            <IconButton icon={AddCircleIcon} text="add" onClick={openPopup} />
          </Grid>
        </Grid>
      </CardContent>

      <Popup mode="add" isOpen={open} onClose={closePopup} setData={setData} />

      <CardContent>
        <Table data={data} setData={setData} />
      </CardContent>
    </Card>
  );
}
