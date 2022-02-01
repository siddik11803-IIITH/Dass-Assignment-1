import { useDebugValue, useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useHistory } from "react-router-dom";

const Wallet_Page = ({ user }) => {
  const [wallet, setWallet] = useState({});
  const [money, addMoney] = useState(0);
  const history = useHistory();
  useEffect(() => {
    axios
      .post("http://localhost:4000/buyer/get_wallet", { email: user.email })
      .then((res) => {
        setWallet(res.data.wallet);
        console.log(res.data.wallet);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleMoneyChange = (event) => {
      const value = event.target.value;
      console.log(value)
      addMoney(value)
  };

  const handleAddMoney = () => {
    if(money === "" || money == 0){
        alert("Can't Add empty things bro")
    }else{
        const newAmount = Number(wallet.amount)  + Number(money)
        axios.post("http://localhost:4000/buyer/transaction", {newAmount: newAmount, email: user.email})
        .then((res) => {
            history.push("/")
            alert(res.data.message)
        })
        
    }
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center"></TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">
                  <Typography variant="h6">Balance: {wallet.amount}₹</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow></TableRow>
            <TableRow>
              <TableCell align="center">
                  <h2>Enter Money to Add: </h2>
                <TextField
                  type="number"
                  name="money_add"
                  placeholder="Enter Money to Add to wallet"
                  onChange={handleMoneyChange}
                  defaultValue={0}
                ></TextField>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">
                <Button variant="contained" onClick={handleAddMoney}>Add Money</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Wallet_Page;
