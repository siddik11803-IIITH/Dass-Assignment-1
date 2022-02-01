import React , {useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'


const Login = ({setLoginUser}) => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    
    const history = useHistory();

    const change_handler = e => {
        const {name, value}  = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const Login = () =>{
        const {email, password} = user;
        if(email && password){
            axios.post("http://localhost:4000/login", user)
            .then(res => {
                alert(res.data.message)
                setLoginUser(res.data.user)
                history.push("/")
            })
        }else{
            if(!email && password){
                alert("Enter your email")
            }
            if(!password && email){
                alert("Enter Password")
            }
            if(!password && !email){
                alert("Please Enter Password and Email")
            }
        }
    }
    return (
        <div className='login'>
            {console.log(user)}
            <center>
                <h1>Login</h1>
                <TextField type={"text"} name = "email" value = {user.email} onChange={change_handler} placeholder='Enter your email' /><br></br><br></br>
                <TextField type={"password"} name = "password" value = {user.password} onChange={change_handler} placeholder='Enter your password' /><br></br><br></br>
                <Button variant= "contained" onClick={Login}>Login</Button>&nbsp;&nbsp;&nbsp;
                <Button variant = "contained" onClick = {() => history.push("/register")}>Register</Button>
            </center>
        </div>
    )
}


export default Login