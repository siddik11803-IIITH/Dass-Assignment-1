import {
    TableRow,
    TableCell,
    Button,
  } from "@mui/material";



const Food_table = ({ food, handleEditClick}) => {
    return(
            <TableRow>
              <TableCell align="left">{food.food_name}</TableCell>
              <TableCell align="left">{food.price}</TableCell>
              <TableCell align="left">{food.add_ons}</TableCell>
              <TableCell align="left">{food.rating}</TableCell>
              <TableCell align="left">{food.tags}</TableCell>
              <TableCell align='left'>
                  <Button onClick={(event) => {handleEditClick(event, food)}}>Edit</Button>
              </TableCell>
            </TableRow>
        
    )
}

export default Food_table;