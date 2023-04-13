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
import Popup from './popup.js';

import toastr from 'toastr';
toastr.options = { positionClass: 'toast-bottom-right' };

const columns = [
  'Title',
  'Description',
  'Deadline',
  'Priority',
  'Is Complete',
  'Action',
];

export default function Table(props) {
  const data = props.data;
  const setData = props.setData;

  function Entry(row) {
    const deleteEntry = () => {
      setData(data.filter((r, i) => r != row));
      toastr['success']('Task deleted successfully');
    };
    const openPopup = () => {
      row.popup = true;
      setData(structuredClone(data));
    };
    const closePopup = () => {
      row.popup = false;
      setData(structuredClone(data));
    };
    const handleCheckbox = (event) => {
      row.checked = event.target.checked;
      setData(structuredClone(data));
    };

    return (
      <TableRow>
        {row.data.map((c, i) => (
          <TableCell align="center">{c}</TableCell>
        ))}
        <TableCell align="center">
          <Checkbox checked={row.checked} onChange={handleCheckbox} />
        </TableCell>
        <TableCell align="center">
          <div>
            {row.checked ? null : (
              <IconButton
                icon={EditNoteIcon}
                text="update"
                onClick={openPopup}
              />
            )}
            <Popup
              mode="edit"
              isOpen={row.popup}
              onClose={closePopup}
              data={data}
              setData={setData}
            />
          </div>

          <IconButton
            icon={CancelIcon}
            text="delete"
            color="error"
            onClick={deleteEntry}
          />
        </TableCell>
      </TableRow>
    );
  }

  return (
    <TableContainer>
      <Table>
        <colgroup>
          {columns.map((c, i) => (
            <col key={c} width="16%" />
          ))}
        </colgroup>
        <TableHead>
          <TableRow>
            {columns.map((c, i) => (
              <TableCell align="center">{c}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{data.map((row, i) => Entry(row))}</TableBody>
      </Table>
    </TableContainer>
  );
}
