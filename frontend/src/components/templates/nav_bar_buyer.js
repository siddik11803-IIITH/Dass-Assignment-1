import { Box, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const NavBar_user = ({ user, setLoginUser }) => {
  const [wallet, setWallet] = useState({});
  
  const history = useHistory();
  useEffect(() => {
    axios
      .post("http://localhost:4000/buyer/get_wallet", { email: user.email })
      .then((res) => {
        setWallet(res.data.wallet);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
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
                variant="h6"
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  setLoginUser(user);
                  history.push("/buyer/wallet");
                }}
              >
                Wallet
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              <Typography
                variant="h6"
                component="div"
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  setLoginUser(user);
                  history.push("/buyer/placed_orders");
                }}
              >
                Check Orders
              </Typography>
              <Box sx={{ flexGrow: 0.09 }} />
              <Typography
                variant="h6"
                sx={{ cursor: "pointer" }}
                component="div"
                onClick={() => {
                  setLoginUser(user);
                  history.push("/buyer/place_order");
                }}
              >
                Buy Food
              </Typography>
              <Box sx={{ flexGrow: 0.09 }} />
              <Typography
                variant="h6"
                sx={{ cursor: "pointer" }}
                component="div"
                onClick={() => {
                  setLoginUser(user);
                  history.push("/buyer/profile");
                }}
              >
                Profile
              </Typography>
              <Box sx={{ flexGrow: 0.09 }} />
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
              </Typography>{" "}
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </div>
  );
};

export default NavBar_user;
