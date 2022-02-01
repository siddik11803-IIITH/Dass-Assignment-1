import { TableHead, Table, TableCell, TableRow, Button } from "@mui/material";

import { Input } from "@mui/material";
import { useEffect, useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
const Add_order = ({order, handleSubmitOrder, handleQuantityChange }) => {
  
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Table>
        <TableRow>
          <TableCell align="center">Name</TableCell>
          <TableCell align="left">{order.food_name}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center">Price</TableCell>
          <TableCell align="left">{order.price}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center">Email of the Vendor</TableCell>
          <TableCell align="left">{order.vendor_email}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center">Quantity</TableCell>
          <TableCell align="left">
            <input
              type={"number"}
              min={0}
              max={10}
              style={{ width: "5pc" }}
              name="quantity"
              defaultValue={1}
              onChange={handleQuantityChange}
            ></input>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="right">
            <Button onClick={handleSubmitOrder}>
              Place Order
            </Button>
          </TableCell>
          <TableCell> </TableCell>
        </TableRow>
      </Table>
    </div>
  );
};

export default Add_order;
