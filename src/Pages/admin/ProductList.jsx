import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useDebounce } from 'use-debounce'

const rows = [
  { name: 'Shirt', category: 'Shirt', actual_price: 20, selling_price: 16 },
  { name: 'Western-Top', category: 'Western-Top', actual_price: 75, selling_price: 55 },
  { name: 'T-Shirt', category: 'T-Shirt', actual_price: 16, selling_price: 10 },
  { name: 'Crop-Top', category: 'Crop-Top', actual_price: 35, selling_price: 25 },
  { name: 'Top', category: 'Top', actual_price: 60, selling_price: 57 },
  { name: 'Formal-Shirt', category: 'Formal-Shirt', actual_price: 70, selling_price: 50 }
]

export default function BasicTextFields() {
  const [searchQuery, setSearchQuery] = React.useState('')

  // const [debouncedSearch, setDebouncedSearch] = React.useState('')
  
  const [data, setData] = React.useState(rows)


  // Debounce effect
  // React.useEffect(() => {
  //   const handler = setTimeout(() => {
  //     setDebouncedSearch(searchQuery)
  //   }, 1000) 

  //   return () => {
  //     clearTimeout(handler) // cleanup old timeout
  //   }
  // }, [searchQuery])


  const [debouncedSearch] = useDebounce(searchQuery, 1000)

  // Filter when debouncedSearch changes
  React.useEffect(() => {
    if (debouncedSearch) {
      const filteredList = rows.filter(item =>
        item.name.toLowerCase().includes(debouncedSearch.toLowerCase())
      )
      setData(filteredList)
    } else {
      setData(rows)
    }
  }, [debouncedSearch])

  return (
    <Box component="form" noValidate autoComplete="off">
      {/* Search bar */}
      <TextField
        id="standard-basic"
        placeholder="search here"
        variant="standard"
        value={searchQuery}
        sx={{ m: 1, width: '25ch' }}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Table */}
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight:"800" }}>Products</TableCell>
              <TableCell sx={{ fontWeight:"800" }} align="center">Category</TableCell>
              <TableCell sx={{ fontWeight:"800" }} align="center">Actual Price</TableCell>
              <TableCell sx={{ fontWeight:"800" }} align="center">Selling Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.category}</TableCell>
                <TableCell align="center">{row.actual_price}</TableCell>
                <TableCell align="center">{row.selling_price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
