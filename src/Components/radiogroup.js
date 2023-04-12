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
  const options = props.options;
  const initial = props.initial;

  const [selectedValue, setSelectedValue] = React.useState(initial);
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const buttons = options.map((opt) => (
    <FormControlLabel
      value={opt}
      label={opt}
      control={<Radio size="small" />}
    />
  ));

  return (
    <FormControl>
      <FormLabel id="radios">Priority</FormLabel>
      <RadioGroup row value={selectedValue} onChange={handleChange}>
        {buttons}
      </RadioGroup>
    </FormControl>
  );
}
