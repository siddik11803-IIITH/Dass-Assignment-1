import { Box, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import React, { useState } from "react";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../templates/nav_bar_vendor";
import FoodPage from "../Vendor_things/food_page";
import Profile from "../Vendor_things/profile";
import Edit_profile from "../Vendor_things/edit_profile";
import Add_food from "../Vendor_things/add_food";
import Recieved_orders from "../Vendor_things/recieved_orders";





const Vendorpage = ({ setLoginUser, user }) => {
  const history = useHistory();

  return (
    <div>
      <Router>
        <Route exact path="/">
          <NavBar user={user} setLoginUser={setLoginUser} />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
            }}
          >
            <h1>Hello {user.name}</h1>
          </div>
        </Route>
        <Route exact path="/vendor/food">
          <NavBar user={user} setLoginUser={setLoginUser} />
          <FoodPage user={user} />
        </Route>
        <Route exact path="/vendor/add_food">
          <NavBar user={user} setLoginUser={setLoginUser} />
          <Add_food user={user} />
        </Route>
        <Route exact path="/vendor/profile">
          <NavBar user={user} setLoginUser={setLoginUser} />
          <Profile user={user} />
        </Route>
        <Route exact path="/vendor/edit_profile">
          <NavBar user={user} setLoginUser={setLoginUser} />
          <Edit_profile user={user} />
        </Route>
        <Route exact path  = "/vendor/recieved_orders">
          <NavBar user={user} setLoginUser={setLoginUser} />
          <Recieved_orders user = {user}/>            
        </Route>
      </Router>
    </div>
  );
};

export default Vendorpage;
