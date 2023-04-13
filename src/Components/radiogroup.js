import React from 'react';
import '../style.css';
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

export default function PopupRadioGroup(props) {
  const label = props.label;
  const options = props.options;
  const value = props.value;
  const onChange = props.onChange;

  const buttons = options.map((opt) => (
    <FormControlLabel
      value={opt}
      label={opt}
      control={<Radio size="small" />}
    />
  ));

  return (
    <FormControl>
      <FormLabel id={label}>{label}</FormLabel>
      <RadioGroup row value={value} onChange={onChange}>
        {buttons}
      </RadioGroup>
    </FormControl>
  );
}
