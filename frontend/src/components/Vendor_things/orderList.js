import { Button, createMuiTheme, TableCell, TableRow } from "@mui/material";
import { yellow, yellows } from "@mui/material/colors";

const OrderList = ({ order , handleCookedOrder, handleAcceptButton, handleRejectButton, handleAcceptedButton}) => {
  
  const returnButtons = () => {

    if (order.state === "PLACED") {
      return (
        <div>
          <Button variant="contained" onClick = {(event) => {handleAcceptButton(event, order)}}>Accept</Button>
          <br></br>
          <br></br>
          <Button variant="contained" color="error" onClick =   {(event) => handleRejectButton(event, order)}>Reject</Button>
        </div>
      );
    }else if(order.state === "REJECTED"){
      return(
        <div>
          <Button variant="outlined" color="error" onClick={() => alert("Sorry, your "+ order.food_name+ " has been rejected")}>REJECTED</Button>
        </div>
      )
    }else if(order.state === "ACCEPTED"){
      return(
        <div>
          <Button variant="outlined" color="success" onClick={(event) => handleAcceptedButton(event, order)}>ACCEPTED</Button>
        </div>
      )
    }else if(order.state === "COOKING"){
      return(
        <div>
          <Button variant = 'outlined' color="success" onClick={(event) => handleCookedOrder(event, order)}>COOKING</Button>
        </div>
      )
    }else if(order.state === "READY FOR PICKUP"){
      return(
        <div>
          <Button variant="contained" onClick={() => alert("Bhaiyya "+order.food_name+"!!")}>READY FOR PICKUP</Button>
        </div>
      )
    }else if(order.state === "COMPLETED"){
      return(
        <Button variant="text" color="success">COMPLETED</Button>
      )
    }
  };
  return (
    <TableRow>
      <TableCell align="center">{order.food_name}</TableCell>
      <TableCell align="center">{order.user_email}</TableCell>
      <TableCell align="center">{order.cost}</TableCell>
      <TableCell align="center">{returnButtons()}</TableCell>
    </TableRow>
  );
};

export default OrderList;
