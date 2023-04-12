import React from 'react';
import '../style.css';
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

const test = (
  <FormControl>
    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
    <RadioGroup
      row
      aria-labelledby="demo-row-radio-buttons-group-label"
      name="row-radio-buttons-group"
    >
      <FormControlLabel value="female" control={<Radio />} label="Female" />
      <FormControlLabel value="male" control={<Radio />} label="Male" />
      <FormControlLabel value="other" control={<Radio />} label="Other" />
      <FormControlLabel
        value="disabled"
        disabled
        control={<Radio />}
        label="other"
      />
    </RadioGroup>
  </FormControl>
);

export default function PopupRadioGroup(props) {
  const options = props.options;

  const buttons = options.map((opt) => (
    <FormControlLabel
      value={opt}
      control={<Radio size="small" />}
      label={opt}
    />
  ));

  return (
    <FormControl>
      <FormLabel id="radios">Priority</FormLabel>
      <RadioGroup row>{buttons}</RadioGroup>
    </FormControl>
  );
}
