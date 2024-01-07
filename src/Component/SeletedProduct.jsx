import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";
import { DIGITAL_CLOCK_VIEW_HEIGHT } from '@mui/x-date-pickers/internals/constants/dimensions';
import { Link, useNavigate } from 'react-router-dom';

export default function SeletedProduct({ selectedProductList }) {
  const data = window.localStorage.getItem('selectedItemLists')
  const tempData = JSON.parse(data)
  let selectedArr = []
  tempData.forEach(elem => {
    if (elem.quantity > 0) selectedArr.push(elem)
  })

  const navigate = useNavigate();
  const changePath = () => {
    navigate("/orderDetails")
  }

  return (
    <div>
      <h1 className='textCenter'>All Order Products</h1>
      <div className='textCenter'>
        <Button variant="contained" onClick={changePath} >Product List</Button>
        <Link onClick={navigate("/selectedproduct")} ><Button variant="contained">Order Details</Button></Link>
      </div>
      <div style={{ width: "800px", margin: "auto" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Qunitity</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {selectedArr.map((item) => (
                <TableRow
                  key={item.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">{item.Name}</TableCell>
                  <TableCell component="th" scope="row">{item.quantity}</TableCell>
                  <TableCell component="th" scope="row">{item.TradePrice}</TableCell>
                  <TableCell component="th" scope="row">
                    <button>Save</button>
                    <button>Submit</button>
                    <button>Delete</button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}