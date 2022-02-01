import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Order_list from "./orderList";
import {useHistory} from 'react-router-dom'
const Placed_Orders = ({user}) => {
    const [orderList, setOrderList] = useState([]);
    const history = useHistory();
    useEffect(() => {
        axios.post("http://localhost:4000/buyer/orders", {email: user.email})
        .then((res) => {
            setOrderList(res.data)
        })
    }, [])

    const handleOrderPickUp = (event, order) => {
        axios.post("http://localhost:4000/buyer/pickup_order", {order: order})
        .then((res) => {
            console.log(res.data.consoleLogger)
            alert(res.data.message)
            history.push("/")
        })
        .catch((err) => {
            console.log("Pickup Error: "+err)
        })
    }
    return (
        <div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Item Name</TableCell>
                            <TableCell align="center">Cost</TableCell>
                            <TableCell align="center">Quantity</TableCell>
                            <TableCell align="center">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orderList.map((order) => (
                            <Order_list order={order} handleOrderPickUp={handleOrderPickUp}/>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Placed_Orders;
