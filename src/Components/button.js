import React from 'react';
import '../style.css';
import { Button, Typography } from '@mui/material';

export default function IconButton(props) {
  const icon = <props.icon fontSize="small" />;
  const text = props.text;
  const color = props.color ? props.color : 'primary';
  const onClick = props.onClick;

  return (
    <Button variant="contained" color={color} onClick={onClick} sx={{ m: 0.5 }}>
      {icon}
      <Typography lineHeight={0}>&nbsp;{text}</Typography>
    </Button>
  );
}
