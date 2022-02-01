import '../../App.css'
import { Button, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios'
import {BrowserRouter as Router, Switch ,Route,  Link, useHistory} from 'react-router-dom'
import { TextField } from '@mui/material';

const Profile = ({user}) => {
    const [vendor, setVendor] = useState({})
    useEffect(() => {
        axios.post("http://localhost:4000/vendor/profile", user)
        .then(res => {
            setVendor(res.data)
        })
    }, [])
    const history = useHistory();

    return(
        <div>
            
                <div>
            {console.log(vendor)}
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align='left'>Name of the Vendor</TableCell>
                                <TableCell align='left'>Phone Number</TableCell>
                                <TableCell align='left'>Canteen</TableCell>
                                <TableCell align='left'>Timings of Canteen</TableCell>
                            </TableRow>
                        </TableHead>
                            <TableRow>
                                <TableCell align='left'>{user.name}</TableCell>
                                <TableCell align='left'>{user.phone_number}</TableCell>
                                <TableCell align='left'>{vendor.shop_name}</TableCell>
                                <TableCell align='left'>{vendor.open_close_time}</TableCell>

                            </TableRow>
                    </Table>
                </TableContainer>
                <br></br>
            <center>
            <Button variant='contained' onClick = {() => {history.push("/vendor/edit_profile")}}>Edit Profile</Button>
            </center>
            </div>
        </div> 
    )
}

export default Profile;