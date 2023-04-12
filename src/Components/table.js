import React from 'react';
import '../style.css';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';

const columns = [
  'Title',
  'Description',
  'Deadline',
  'Priority',
  'IsComplete',
  'Action',
];

const columnHeaders = columns.map((c) => (
  <TableCell align="center">{c}</TableCell>
));

export default function Table() {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>{columnHeaders}</TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
}
