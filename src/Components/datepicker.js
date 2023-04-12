import React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DatePicker(props) {
  const label = props.label;
  const defaultValue = dayjs(props.default);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker label={label} defaultValue={defaultValue} />
    </LocalizationProvider>
  );
}
