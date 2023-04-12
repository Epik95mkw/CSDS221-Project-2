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
import IconButton from './button.js';
import DatePicker from './datepicker.js';

function popupIcon(size, isEdit) {
  if (isEdit) return <EditNoteIcon fontSize={size} />;
  else return <AddCircleIcon fontSize={size} />;
}

export default function Popup(props) {
  const isEdit = props.mode == 'edit';
  const modeText = isEdit ? 'Edit' : 'Add';

  return (
    <Card className="popup">
      <CardContent sx={{ color: 'white', backgroundColor: 'primary.dark' }}>
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
          sx={{ '& > :not(style)': { m: 1, mb: 2, width: '25ch' } }}
        >
          {isEdit ? (
            <></>
          ) : (
            <TextField
              id="title"
              label="Title"
              variant="outlined"
              helperText="Title is required"
            />
          )}
          <TextField
            id="description"
            label="Description"
            variant="outlined"
            helperText="Description is required"
          />
          <DatePicker label="Deadline" />
        </Box>
      </CardContent>
    </Card>
  );
}
