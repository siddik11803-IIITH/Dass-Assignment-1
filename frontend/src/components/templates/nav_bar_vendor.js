import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";





const NavBar = ({user, setLoginUser}) =>{
    const history = useHistory();
    return(
         <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Container maxWidth="xl">
              <Toolbar>
                <Typography
                  variant="h6"
                  component="div"
                  onClick={() => history.push("/")}
                  sx={{ cursor: "pointer" }}
                >
                  
                 Home
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Typography
                variant = 'h6'
                sx ={{cursor: 'pointer'}}
                onClick = {() => {
                  setLoginUser(user);
                  history.push("/vendor/recieved_orders")
                }}
                >Recieved Orders</Typography>
                <Box sx={{ flexGrow: 0.05 }} />
                <Typography
                  variant="h6"
                  sx={{ cursor: "pointer" }}
                  component="div"
                  onClick={() => {
                      setLoginUser(user);
                      history.push("/vendor/food");
                  }}
                >
                  Food
                </Typography>
                <Box sx={{ flexGrow: 0.05 }} />
                <Typography variant='h6' sx = {{cursor: "pointer"}} component = 'div' onClick={() => {setLoginUser(user); history.push("/vendor/profile")}}>
                    Profile
                </Typography>
                <Box sx={{ flexGrow: 0.05 }} />
                <Typography
                  variant="h6"
                  sx={{ cursor: "pointer" }}
                  component="div"
                  onClick={() => {
                    setLoginUser({});
                    history.push("/");
                  }}
                >
                  Logout
                </Typography>
              </Toolbar>
            </Container>
          </AppBar>
        </Box> 

    )
}

export default NavBar;