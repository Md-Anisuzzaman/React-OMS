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
import { useLogin } from '../Context/LoginProvider';
import { useEffect } from 'react';

export default function SeletedProduct({ selectedProductList }) {

  const { selectedLists, setSelectedLists } = useLogin();
  let selectedArr = []
  console.log("selectedLists", selectedLists.datas[0]);
  if (selectedLists.datas.length > 1) {
    selectedLists.datas.forEach(elem => {
      if (elem.quantity > 0) selectedArr.push(elem)
    })
  }

  const navigate = useNavigate();
  const changePath = (path) => {
    navigate(`/${path}`);
  };
  // useEffect(() => {
  //   // changePath();
  // }, []);
  console.log(selectedArr);

  return (
    <div>
      <h1 className='textCenter'>All Order Products</h1>
      {
        selectedLists.datas.length > 1 ? <><div className='textCenter'>
          <Button onClick={() => changePath("orderDetails")} variant="contained">Product Lists</Button>
          <Button onClick={() => changePath("selectedproduct")} variant="contained">Order Lists</Button>
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
                      key={item.ProductId}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">{item.Name}</TableCell>
                      <TableCell component="th" scope="row">{item.quantity}</TableCell>
                      <TableCell component="th" scope="row">{item.MRP}</TableCell>
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
          </div></> : <h3>{selectedLists.datas[0]}</h3>
      }
    </div>
  );
}
