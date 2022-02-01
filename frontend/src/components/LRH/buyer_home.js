import React, { useState } from "react";
import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { Box } from "@mui/system";
import NavBar_user from "../templates/nav_bar_buyer";
import User_profile from "../Buyer Things/profile";
import Edit_user_profile from "../Buyer Things/edit_profile";
import Place_order from "../Buyer Things/place_order";
import Placed_Orders from "../Buyer Things/placed_orders";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Wallet_Page from "../Buyer Things/wallet_page"

const Buyerpage = ({ setLoginUser, user }) => {
  const history = useHistory();
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <NavBar_user user={user} setLoginUser={setLoginUser} />
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
          <Route exact path="/buyer/profile">
            <NavBar_user user={user} setLoginUser={setLoginUser} />
            <User_profile user={user} />
          </Route>
          <Route exact path="/buyer/edit_profile">
            <NavBar_user user={user} setLoginUser={setLoginUser} />
            <Edit_user_profile user={user} />
          </Route>
          <Route exact path="/buyer/place_order">
            <NavBar_user user={user} setLoginUser={setLoginUser} />
            <Place_order user={user} />
          </Route>
          <Route exact path="/buyer/placed_orders">
            <NavBar_user user={user} setLoginUser={setLoginUser} />
            <Placed_Orders user={user} />
          </Route>
          <Route exact path="/buyer/wallet">
            <NavBar_user user={user} setLoginUser={setLoginUser} />
            <Wallet_Page user={user}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Buyerpage;
