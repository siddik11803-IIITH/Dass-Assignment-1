import { Button, imageListClasses, TableCell, TableRow } from "@mui/material";
import { Box } from "@mui/system";

const Order_list = ({ order, handleOrderPickUp }) => {
  const returnStatus = () => {
    if (order.state === "PLACED") {
      return (
        <div>
          <Button color="success" variant="outlined" onClick={() => alert("Wait Until the Vendor Accepts")}>PLACED</Button>
        </div>
      );
    } else if (order.state === "ACCEPTED") {
      return (
        <div>
          <Button color = "success" variant="outlined">ACCEPTED</Button>
        </div>
      );
    } else if(order.state === "COOKING"){
      return(
        <div>
          <Button color="success" variant="outlined">COOKING</Button>
        </div>
      )
    } else if(order.state === "READY FOR PICKUP"){
      return(
        <div>
          <Button color="success" variant="contained" onClick={(event) => handleOrderPickUp(event, order)}>READY FOR PICKUP</Button>
        </div>
      )
    } else if(order.state === "COMPLETED"){
      return(
        <div>
          <Button color="success" variant="text">COMPLETED</Button>
        </div>
      )
    } else if(order.state === "REJECTED"){
      return(
        <div>
          <Button color="error" variant="text">REJECTED</Button>
        </div>
      )
    }
  };

  return (
    <TableRow>
      <TableCell align="center">{order.food_name}</TableCell>
      <TableCell align="center">{order.cost}</TableCell>
      <TableCell align="center">{order.quantity}</TableCell>
      <TableCell align="center">{returnStatus()}</TableCell>
    </TableRow>
  );
};

export default Order_list;
