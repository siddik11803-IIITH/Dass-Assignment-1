import {
    TableContainer,
    TableHead,
    Table,
    TableRow,
    TableCell,
    Button,
    TextField,
    Input,
  } from "@mui/material";


const UserFoodTable = ({foodList, handlePlaceOrder}) => {
    return(
        <div>
      {console.log(foodList)}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nane of the Food Item</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Tags</TableCell>
              <TableCell>Rating</TableCell>
              <TableCell>Add Ons</TableCell>
              <TableCell> </TableCell>
            </TableRow>
          </TableHead>
          {foodList.data.map((food) => (
            <TableRow>
              <TableCell>{food.food_name}</TableCell>
              <TableCell>{food.price}</TableCell>
              <TableCell>
                {(() => {
                  if (food.tags) {
                    return food.tags;
                  } else {
                    return "Not Available";
                  }
                })()}
              </TableCell>
              <TableCell>{food.rating}</TableCell>
              <TableCell>
                {(() => {
                  if (food.add_ons) {
                    return food.add_ons;
                  } else {
                    return "Not Available";
                  }
                })()}
              </TableCell>
              <TableCell>
                <Button variant="outlined" onClick={(event) => handlePlaceOrder(event, food)}>Place Order</Button>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      </TableContainer>
    </div>
    )
}

export default UserFoodTable;