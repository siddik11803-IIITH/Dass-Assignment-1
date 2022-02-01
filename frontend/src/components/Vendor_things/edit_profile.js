import { Button, TextField } from "@mui/material"
import axios from "axios"
import { useState } from "react"
import { useHistory } from "react-router-dom"
const Edit_profile = ({user}) => {
    const history = useHistory();
    const [newUser, setnewUser] = useState({
        new_name: "",
        new_phone_number: "",
        new_shop_name: "",
        new_timings: ""
    })
    const Update_user = () => {
        axios.put("http://localhost:4000/vendor/edit_profile", {newUser: newUser, email: user.email})
        .then((res) =>{
            alert(res.data)
            history.push("/")
        })
    }

    const change_handler = e => {
        const {name, value}  = e.target
        setnewUser({
            ...newUser,
            [name]: value
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
            <TextField variant = "outlined" onChange={change_handler} label = 'Your new Shop Name' name="new_shop_name"/>
            <br></br>
            <br></br>
            <TextField variant = "outlined" onChange={change_handler} label = 'Your new Timings' name="new_timings"/>
            <br></br>
            <br></br>
            <Button variant="contained" onClick = {Update_user}>Submit</Button>
            </center>
        </div>

    )
}

export default Edit_profile;