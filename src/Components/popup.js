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

function popupIcon(size, isEdit) {
  if (isEdit) return <EditNoteIcon fontSize={size} />;
  else return <AddCircleIcon fontSize={size} />;
}

export default function Popup(props) {
  const isEdit = props.mode == 'edit';

  const modeText = isEdit ? 'Edit' : 'Add';
  const modeIcon = isEdit ? (
    <EditNoteIcon fontSize="medium" />
  ) : (
    <AddCircleIcon fontSize="medium" />
  );

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
          sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        >
          {isEdit ? (
            <></>
          ) : (
            <div className="form-spacing">
              <TextField
                id="title"
                label="Title"
                variant="outlined"
                margin="small"
                helperText="Title is required"
              />
            </div>
          )}
          <div>
            <TextField
              id="description"
              label="Description"
              variant="outlined"
              margin="small"
              helperText="Description is required"
            />
          </div>
          <div>
            <TextField
              id="deadline"
              label="Deadline"
              variant="outlined"
              margin="small"
              helperText=""
            />
          </div>
        </Box>
      </CardContent>
    </Card>
  );
}
