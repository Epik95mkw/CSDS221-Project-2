import React from 'react';
import './style.css';
import { Card, CardContent, Modal, Box, Typography } from '@mui/material';
import Header from './Components/header.js';
import Table from './Components/table.js';

function enablePopup() {
  console.log('test');
}

export default function App() {
  const [open, setOpen] = React.useState(false);
  const openPopup = () => setOpen(true);
  const closePopup = () => setOpen(false);

  return (
    <Card>
      <Header onAddClick={openPopup} />
      <Modal open={open} onClose={closePopup}>
        <Card>test</Card>
      </Modal>
      <CardContent>
        <Table />
      </CardContent>
    </Card>
  );
}
