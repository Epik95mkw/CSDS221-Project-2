import React from 'react';
import '../style.css';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  TextField,
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

function textInput(label) {
  return (
    <div>
      <TextField
        id={label}
        label={label}
        variant="outlined"
        fullWidth
        helperText={label + ' is required'}
      />
    </div>
  );
}

export default function Popup(props) {
  const isEdit = props.mode == 'edit';
  const modeText = isEdit ? 'Edit' : 'Add';

  return (
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
            {isEdit ? null : textInput('Title')}
            {textInput('Description')}
            <DatePicker label="Deadline" />
            <PopupRadioGroup options={['Low', 'Med', 'High']} initial="Low" />
          </Box>
        </CardContent>
        <Box align="right" sx={{ m: 0.3 }}>
          <IconButton icon={isEdit ? EditNoteIcon : AddCircleIcon} text="add" />
          <IconButton icon={DoNotDisturbAltIcon} text="cancel" color="error" />
        </Box>
      </Card>
    </Box>
  );
}
