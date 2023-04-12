import React from 'react';
import './style.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, CardContent, Modal, Button, Typography } from '@mui/material';
import Header from './Components/header.js';
import Table from './Components/table.js';
import Popup from './Components/popup.js';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          lineHeight: 0,
        },
      },
    },
  },
});

const testButton = (
  <Button
    variant="contained"
    startIcon={}
    onClick={}
  >
    <AddCircleIcon fontSize="small" />
    <Typography>add</Typography>
  </Button>
);

export default function App() {
  const [open, setOpen] = React.useState(false);
  const openPopup = () => setOpen(true);
  const closePopup = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <Card>
        <Header onAddClick={openPopup} />
        <Modal open={open} onClose={closePopup}>
          <Popup />
        </Modal>
        <CardContent>
          <Table />
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
