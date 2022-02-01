import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import "../../App.css";
import OrderList from "./orderList";
import { useHistory } from "react-router-dom";

const Recieved_orders = ({ user }) => {
  const [orderList, setOrderList] = useState([]);
  const history  = useHistory();

  useEffect(() => {
    axios
      .post("http://localhost:4000/vendor/recieved_orders", user)
      .then((res) => {
        setOrderList(res.data);
      });
  }, []);

  const handleAcceptButton = (event, order) => {
    axios.post("http://localhost:4000/vendor/accept_order", {order: order})
    .then((res) => {
      alert(res.data.message)
      console.log(res.data.consoleLogger)
      history.push("/")
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const handleRejectButton = (event, order) => {
    axios.post("http://localhost:4000/vendor/reject_order", {order: order})
    .then((res) => {
      alert(res.data.message)
      console.log(res.data.consoleLogger)
      history.push("/")
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const handleAcceptedButton = (event, order) => {
    axios.post("http://localhost:4000/vendor/cook_order", {order: order})
    .then((res) => {
      alert(res.data.message)
      console.log(res.data.consoleLogger)
      history.push("/")
    })
    .catch((err) => {
      console.log(err)
    })
  }
  
  const handleCookedOrder = (event, order) => {
    axios.post("http://localhost:4000/vendor/order_cooked", {order: order})
    .then((res) => {
      alert(res.data.message)
      console.log(res.data.consoleLogger)
      history.push("/")
    })
    .catch((err) => {
      console.log(err)
    })
  }



  return (
    <div className="app">
      {console.log(orderList)}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Item Name</TableCell>
              <TableCell align="center">Given by</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderList.map((order) => (
              <OrderList order={order} handleCookedOrder={handleCookedOrder} handleAcceptedButton={handleAcceptedButton} handleAcceptButton={handleAcceptButton} handleRejectButton={handleRejectButton}/>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Recieved_orders;
