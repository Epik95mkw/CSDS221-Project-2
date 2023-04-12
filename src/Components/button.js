import React from 'react';
import style from '../style.css';
import { Button, Typography } from '@mui/material';

export default function IconButton(props) {
  const icon = <props.icon fontSize="small" />;
  const text = props.text;
  const onClick = props.onClick;

  return (
    <Button variant="contained" onClick={onClick}>
      {icon}
      <Typography lineHeight={0}>&nbsp;{text}</Typography>
    </Button>
  );
}
