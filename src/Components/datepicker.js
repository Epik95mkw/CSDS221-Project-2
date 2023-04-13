import React from 'react';
import '../style.css';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DatePicker(props) {
  const label = props.label;
  const value = props.value;
  const onChange = props.onChange;
  const defaultValue = dayjs(props.default);

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label={label}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
        />
      </LocalizationProvider>
    </div>
  );
}
