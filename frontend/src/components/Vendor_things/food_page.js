import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Button,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Paper } from "@mui/material";
import { withStyles } from "@mui/material";
import Food_table from "./food_table";
import Edit_food_table from "./edit_food_table";

const FoodPage = ({ user }) => {
  const [food, setFood] = useState({
    post: [],
  });
  const [editFoodID, setEditFoodID] = useState(null);
  const [editFormData, setEditFormdata] = useState({
    food_name: "",
    price: "",
    add_ons: "",
    rating: "",
    tags: ""
  })

  useEffect(() => {
    axios
      .post("http://localhost:4000/vendor/food", { email: user.email })
      .then((res) => {
        setFood({ post: res.data });
      });
  }, []);

  const handleEditFormSubmit = (event) => {
    event.preventDefault()


    const editedFood = {
      _id: editFoodID,
      food_name: editFormData.food_name,
      price: editFormData.price,
      add_ons: editFormData.add_ons,
      rating: editFormData.rating,
      tags: editFormData.tags,
    }

    axios.post("http://localhost:4000/vendor/edit_food", {data: editedFood}) 
    history.push("/")
  }

  const handleEditClick = (event, food) => {
    event.preventDefault();
    setEditFoodID(food._id);


    const formValues = {
      food_name: food.food_name,
      price: food.price,
      add_ons: food.add_ons,
      rating: food.rating,
      tags: food.tags 
    }

    setEditFormdata(formValues);
  }

  const handleEditForm = (event) => {
    event.preventDefault();

    const name = event.target.getAttribute("name");
    const value = event.target.value;

    const  newFormData = {...editFormData}
    newFormData[name] = value

    setEditFormdata(newFormData);
  }

  const handleCancel = () => {
    setEditFoodID(null);
  }













  const history = useHistory();
  return (
    <div>
      
      <form onSubmit={handleEditFormSubmit}>
        <TableContainer component={Paper}>
          <Table>
            <TableRow width="100%">
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Add Ons</TableCell>
              <TableCell align="left">Rating</TableCell>
              <TableCell align="left">Tags</TableCell>
            </TableRow>
            {food.post.map((food) => (
              <Fragment>
                {editFoodID == food._id ? (
                  <Edit_food_table editFormData={editFormData} handleEditForm = {handleEditForm} handleEditFormSubmit = {handleEditFormSubmit} handleCancel = {handleCancel}/>
                ) : (
                  <Food_table food={food} handleEditClick = {handleEditClick}/>
                )}
              </Fragment>
            ))}
          </Table>
        </TableContainer>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <center>
          <Button
            variant="contained"
            onClick={() => history.push("/vendor/add_food")}
          >
            Add Food
          </Button>
        </center>
      </form>
    </div>
  );
};

export default FoodPage;
