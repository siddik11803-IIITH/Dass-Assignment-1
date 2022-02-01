import { Table, TableCell, TableRow, Button } from "@mui/material";
import { TextField } from "@mui/material";


const Edit_food_table = ({ editFormData, handleEditForm , handleEditFormSubmit, handleCancel}) => {
  return (
    <TableRow>
      <TableCell>
        <TextField
          type="text"
          required="required"
          placeholder="Enter the Name of the food"
          name="food_name"
          value={editFormData.food_name}
          onChange={handleEditForm}
        ></TextField>
      </TableCell>

      <TableCell>
        <TextField
          type="text"
          placeholder="Enter the price"
          name="price"
          value={editFormData.price}
          onChange={handleEditForm}
        ></TextField>
      </TableCell>

      <TableCell>
        <TextField
          type="text"
          placeholder="Enter add ons"
          name="add_ons"
          value={editFormData.add_ons}
          onChange={handleEditForm}
        ></TextField>
      </TableCell>

      <TableCell>
        <TextField
          type="text"
          placeholder="Enter the rating"
          name="rating"
          onChange={handleEditForm}
          value={editFormData.rating}
        ></TextField>
      </TableCell>

      <TableCell>
        <TextField
          type="text"
          placeholder="Enter the tags"
          name="tags"
          onChange={handleEditForm}
          value={editFormData.tags}
        ></TextField>
      </TableCell>

      <TableCell>
          <Button type="submit" onClick={handleEditFormSubmit}>Save</Button>
          <Button variant="contained" color = "error" onClick={handleCancel}>Cancel</Button>
      </TableCell>
    </TableRow>
  );
};

export default Edit_food_table;
