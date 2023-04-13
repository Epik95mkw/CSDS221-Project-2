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

export default function Table(props) {
  const data = props.data;
  const setData = props.setData;

  function Entry(rowData) {
    const [open, setOpen] = React.useState(false);
    const openPopup = () => setOpen(true);
    const closePopup = () => setOpen(false);

    const [checked, setChecked] = React.useState(false);
    const handleChange = (event) => {
      setChecked(event.target.checked);
    };

    const deleteEntry = () => setData(data.filter((r, i) => r != rowData));

    return (
      <TableRow>
        {rowData.map((c, i) => (
          <TableCell align="center">{c}</TableCell>
        ))}
        <TableCell align="center">
          <Checkbox checked={checked} onChange={handleChange} />
        </TableCell>
        <TableCell align="center">
          <div>
            {checked ? null : (
              <IconButton
                icon={EditNoteIcon}
                text="update"
                onClick={openPopup}
              />
            )}
            <Popup
              mode="edit"
              isOpen={open}
              onClose={closePopup}
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
            <col width="16%" />
          ))}
        </colgroup>
        <TableHead>
          <TableRow>{columnHeaders}</TableRow>
        </TableHead>
        <TableBody>{data.map((row, i) => Entry(row))}</TableBody>
      </Table>
    </TableContainer>
  );
}
