import React from 'react';
import '../style.css';
import {
  Typography,
  CardContent,
  Grid,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const columns = [
  'Title',
  'Description',
  'Deadline',
  'Priority',
  'IsComplete',
  'Action',
];

const columnHeaders = columns.map((c) => (
  <TableCell align="center">{c}</TableCell>
));

export default function Header() {
  return (
    <div>
      <CardContent sx={{ color: 'white', backgroundColor: 'primary.dark' }}>
        <Grid container>
          <Grid item xs></Grid>
          <Grid item xs={6} className="centered">
            <MenuIcon />
            <Typography>&nbsp;FRAMEWORKS</Typography>
          </Grid>
          <Grid item xs className="align-right">
            <Button variant="contained">
              <AddCircleIcon />
              &nbsp;ADD
            </Button>
          </Grid>
        </Grid>
      </CardContent>

      <CardContent>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>{columnHeaders}</TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </CardContent>
    </div>
  );
}
