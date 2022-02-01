import "../../App.css";
import {
  Button,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Paper } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { TextField } from "@mui/material";

const User_profile = ({ user }) => {
  const [buyer, setBuyer] = useState({});
  useEffect(() => {
    axios.post("http://localhost:4000/buyer/profile", user).then((res) => {
      setBuyer(res.data);
    });
  }, []);

  const history = useHistory();
  return (
    <div>
      <div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">Name of the Buyer</TableCell>
                <TableCell align="center">Phone Number</TableCell>
                <TableCell align="center">Batch</TableCell>
                <TableCell align="center">Age</TableCell>
              </TableRow>
            </TableHead>
            <TableRow>
              <TableCell align="center">{user.name}</TableCell>
              <TableCell align="center">{user.phone_number}</TableCell>
              <TableCell align="center">{buyer.batch}</TableCell>
              <TableCell align="center">{buyer.age}</TableCell>
            </TableRow>
          </Table>
        </TableContainer>
        <br></br>
      </div>
        <center>
          <Button
            variant="contained"
            onClick={() => history.push("/buyer/edit_profile")}
          >
            Edit Profile
          </Button>
        </center>
    </div>
  );
};

export default User_profile;
