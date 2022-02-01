import {  Button, TextField } from "@mui/material";
import { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";





const Add_food = ({user}) => {
    const history = useHistory();
    const [newFood, setnewFood] = useState({
        vendor_email: user.email,
        food_name: "",
        price: 0,
        add_ons: "",
        rating: 0,
        tags: ""
    })

    const change_handler = e => {
        const {name, value}  = e.target
        setnewFood({
            ...newFood,
            [name]: value
        })
    }

    const Add_food = () => {
        if(newFood.food_name && newFood.price && newFood.rating && newFood.vendor_email){
            axios.post("http://localhost:4000/vendor/add_food", {newFood: newFood})
            .then((res) => {
                alert(res.data.message)
                history.push("/vendor/food")
            })
            .catch((err) => {
                alert(err)
            })
        }else{
            alert("Please Fill all the forms")
        }
    }

    return(
        <div>
            {console.log(newFood)}
            <center>
            
            <br></br>
            <br></br>
            <h1>Add Food to the Database</h1>
            <br></br>
            <br></br>
            <TextField variant = 'outlined' onChange={change_handler} label='Enter the name of the food' name = 'food_name' />
            <br></br>
            <br></br>
            <TextField variant = 'outlined' onChange={change_handler} label='Enter the Price' name = 'price' />
            <br></br>
            <br></br>
            <TextField variant = 'outlined' onChange={change_handler} label='Enter the Add Ons' name = 'add_ons' />
            <br></br>
            <br></br>
            <TextField variant = 'outlined' onChange={change_handler} label='Enter the Rating' name = 'rating' />
            <br></br>
            <br></br>
            <TextField variant = 'outlined' onChange={change_handler} label='Give Words to describe the food' name = 'tags' />
            <br></br>
            <br></br>
            <Button color="success" variant="contained" onClick={Add_food}>Add Food</Button>
            </center>
        </div>
    )
}

export default Add_food;