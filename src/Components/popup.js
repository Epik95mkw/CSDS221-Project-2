import React from 'react';
import '../style.css';
import dayjs from 'dayjs';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  TextField,
  Modal,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import IconButton from './button.js';
import DatePicker from './datepicker.js';
import PopupRadioGroup from './radiogroup.js';

function popupIcon(size, isEdit) {
  if (isEdit) return <EditNoteIcon fontSize={size} />;
  else return <AddCircleIcon fontSize={size} />;
}

function textInput(label, value, onChange) {
  return (
    <div>
      <TextField
        id={label}
        label={label}
        value={value}
        variant="outlined"
        fullWidth
        helperText={label + ' is required'}
        onChange={onChange}
      />
    </div>
  );
}

const initialState = {
  title: '',
  desc: '',
  deadline: dayjs(),
  priority: 'Low',
};

export default function Popup(props) {
  const [formState, setFormState] = React.useState(initialState);
  const handleTitleChange = (ev) =>
    setFormState({ ...formState, title: ev.target.value });
  const handleDescChange = (ev) =>
    setFormState({ ...formState, desc: ev.target.value });
  const handleDeadlineChange = (newValue) =>
    setFormState({ ...formState, deadline: newValue });
  const handlePriorityChange = (ev) =>
    setFormState({ ...formState, priority: ev.target.value });

  const data = props.data;
  const setData = props.setData;
  const insertEntry = (rowData) => {
    let newData = structuredClone(data);
    newData.push({ data: rowData, checked: false, popup: false });
    setData(newData);
    closePopup();
  };
  const editEntry = (rowData) => {
    let newData = structuredClone(data);
    let target = newData.find((r) => r.popup);
    let index = newData.indexOf(target);
    rowData[0] = newData[index].data[0];
    newData[index].data = rowData;
    setData(newData);
    closePopup();
  };

  const isEdit = props.mode == 'edit';
  const modeText = isEdit ? 'Edit' : 'Add';
  const isOpen = props.isOpen;
  const closePopup = () => {
    setFormState(initialState);
    props.onClose();
  };

  function validate() {
    let newRow = [formState.title, formState.desc, 'test', formState.priority];

    if (isEdit) editEntry(newRow);
    else insertEntry(newRow);
  }

  return (
    <Modal open={isOpen} onClose={closePopup}>
      <Box>
        <Card className="popup" sx={{ boxShadow: 20 }}>
          <CardContent
            sx={{ mb: 2, color: 'white', backgroundColor: 'primary.dark' }}
          >
            <Grid container direction="row" alignItems="center">
              {popupIcon('medium', isEdit)}
              <Typography variant="h6" lineHeight={0}>
                &nbsp;{modeText + ' Task'}
              </Typography>
            </Grid>
          </CardContent>
          <CardContent>
            <Box
              component="form"
              direction="column"
              sx={{ '& > :not(style)': { mx: 1, mb: 2, width: '30ch' } }}
            >
              {isEdit
                ? null
                : textInput('Title', formState.title, handleTitleChange)}

              {textInput('Description', formState.desc, handleDescChange)}

              <DatePicker
                label="Deadline"
                value={formState.deadline}
                onChange={handleDeadlineChange}
              />

              <PopupRadioGroup
                label="Priority"
                options={['Low', 'Med', 'High']}
                value={formState.priority}
                onChange={handlePriorityChange}
              />
            </Box>
          </CardContent>
          <Box align="right" sx={{ m: 0.3 }}>
            <IconButton
              icon={isEdit ? EditNoteIcon : AddCircleIcon}
              text={modeText}
              onClick={validate}
            />
            <IconButton
              icon={DoNotDisturbAltIcon}
              text="cancel"
              color="error"
              onClick={closePopup}
            />
          </Box>
        </Card>
      </Box>
    </Modal>
  );
}
