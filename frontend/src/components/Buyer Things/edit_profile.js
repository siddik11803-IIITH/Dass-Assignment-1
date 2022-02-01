import { Button, TextField } from "@mui/material"
import axios from "axios"
import { useState } from "react"
import { useHistory } from "react-router-dom"



const Edit_user_profile = ({user}) => {
    const history = useHistory();
    const [newUser, setnewUser] = useState({
        new_name: "",
        new_phone_number: "",
        new_age: "",
        new_batch: ""
    })


    const change_handler = e => {
        const {name, value}  = e.target
        setnewUser({
            ...newUser,
            [name]: value
        })
    }

    const Update_buyer = () => {
        alert("Here")
        axios.put("http://localhost:4000/buyer/edit_profile", {newUser: newUser, email: user.email})
        .then((res) => {
            alert(res.data);
            history.push("/")
        })
        .catch((err) => {
            alert(err)
        })
    }

    return(
        <div>
            {console.log(newUser)}
            <br></br>
            <br></br>
            <center>
            <TextField variant = "outlined" onChange={change_handler} label = 'Your new Name' name="new_name"/>
            <br></br>
            <br></br>
            <TextField variant = "outlined" onChange={change_handler} label = 'Your new Phone Number' name="new_phone_number"/>
            <br></br>
            <br></br>
            <TextField variant = "outlined" onChange={change_handler} label = 'Your new Age' name="new_age"/>
            <br></br>
            <br></br>
            <TextField variant = "outlined" onChange={change_handler} label = 'Your new Batch' name="new_batch"/>
            <br></br>
            <br></br>
            <Button variant="contained" onClick = {Update_buyer}>Submit</Button>
            </center>
        </div>
    )
}

export default Edit_user_profile;
