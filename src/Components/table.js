import React from 'react';
import '../style.css';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import EditNoteIcon from '@mui/icons-material/EditNote';
import IconButton from './button.js';

const columns = [
  'Title',
  'Description',
  'Deadline',
  'Priority',
  'IsComplete',
  'Action',
];

const columnHeaders = columns.map((c, i) => (
  <TableCell align="center">{c}</TableCell>
));

function entry(row) {
  return (
    <TableRow>
      {row.map((c, i) => (
        <TableCell align="center">{c}</TableCell>
      ))}
      <TableCell align="center">
        <Checkbox />
      </TableCell>
      <TableCell align="center">
        <div>
          <IconButton icon={EditNoteIcon} text="update" />
        </div>
        <IconButton icon={CancelIcon} text="delete" color="error" />
      </TableCell>
    </TableRow>
  );
}

export default function Table(props) {
  const data = [['title1', 'desc1', 'dead', 'prrr']]; //props.data;
  const setData = props.setData;

  return (
    <TableContainer>
      <Table>
        <colgroup>
          {columns.map((c, i) => (
            <col width="16%" />
          ))}
        </colgroup>
        <TableHead>
          <TableRow>{columnHeaders}</TableRow>
        </TableHead>
        <TableBody>{data.map((row) => entry(row))}</TableBody>
      </Table>
    </TableContainer>
  );
}
