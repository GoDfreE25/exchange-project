import React from 'react';
import { Currency } from '../../type/Currency';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

type Props = {
  currency: Currency[];
  getRate: (baseName: string, currentName: string, currency: Currency[]) => number;
}

export const ExchangeInfo: React.FC<Props> = ({ currency, getRate }) => {
  
  return (
    <>
    <h2>For 1 USD You can get</h2>
    <TableContainer component={Paper}>
    <Table sx={{ maxWidth: 750 }} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell>Currency Name</TableCell>
          <TableCell align="right">Current</TableCell>
          <TableCell align="right">Exchange Rate</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {currency.map((current) => (
          <TableRow
            key={current.r030}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {current.txt}
            </TableCell>
            <TableCell align="right">{current.cc}</TableCell>
            <TableCell align="right">{getRate('USD', current.cc, currency)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}