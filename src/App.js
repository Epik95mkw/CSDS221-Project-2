import React from 'react';
import './style.css';
import { Card, CardContent, Modal, Typography } from '@mui/material';
import Header from './Components/header.js';
import Table from './Components/table.js';
import Popup from './Components/popup.js';

export default function App() {
  const [open, setOpen] = React.useState(false);
  const openPopup = () => setOpen(true);
  const closePopup = () => setOpen(false);

  return (
    <Card>
      <Header onAddClick={openPopup} />
      <Modal open={open} onClose={closePopup}>
        <Popup mode="add" />
      </Modal>
      <CardContent>
        <Table />
      </CardContent>
    </Card>
  );
}
