import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone_number: "",
    age: "",
    batch: "",
    type: "",
  });

  const history = useHistory();
  const change_handler = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const Register_buyer = () => {
    const { name, email, password, phone_number, age, batch} = user;
    if (name && email && password && phone_number && age && batch) {
      axios.post("http://localhost:4000/register/buyer", user).then((res) => {
        console.log("Buyer registered");
        alert(res.data.message);
        history.push("/");
      });
    } else {
      alert("Invalid Input");
    }
  };

  const Register_vendor = () => {
    const {
      name_vendor,
      email_vendor,
      password_vendor,
      phone_number_vendor,
      open_close_time,
      shop_name,
    } = user;
    if (
      name_vendor &&
      email_vendor &&
      password_vendor &&
      phone_number_vendor &&
      open_close_time &&
      shop_name
    ) {
      axios.post("http://localhost:4000/register/vendor", user).then((res) => {
        console.log("Vendor registered");
        alert(res.data.message);
        history.push("/");
      });
    } else {
      alert("Invalid Input");
    }
  };
  return (
    <div className="app">
      {console.log("users", user)}
      <center>
        <h1>Registration For Buyers</h1>

        <br></br>
        {/* <select id = "user_type" onChange={change_handler} placeholder='Vendor or Buyer'>
                    <option value={"vendor"}>Vendor</option>
                    <option value={"buyer"}>Buyer</option>
                </select> */}

        <br></br>
        <input
          type={"text"}
          name="name"
          value={user.name}
          onChange={change_handler}
          placeholder="Enter your name"
        ></input>
        <br></br>
        <input
          type={"text"}
          name="email"
          value={user.email}
          onChange={change_handler}
          placeholder="Enter your email"
        ></input>
        <br></br>
        <input
          type={"text"}
          name="password"
          value={user.password}
          onChange={change_handler}
          placeholder="Enter your password"
        ></input>
        <br></br>
        <input
          type={"text"}
          name="phone_number"
          value={user.phone_number}
          onChange={change_handler}
          placeholder="Enter your phone number"
        ></input>
        <br></br>
        <input
          type={"text"}
          name="age"
          value={user.age}
          onChange={change_handler}
          placeholder="Enter your age"
        ></input>
        <br></br>
        <input
          type={"text"}
          name="batch"
          value={user.batch_name}
          onChange={change_handler}
          placeholder="Enter your batch"
        ></input>
        <br></br>
        <button onClick={Register_buyer}>Register</button>
        <button onClick={() => history.push("/login")}>Login</button>
      </center>
      <br></br>
      <br></br>
      <br></br>
      <center>
        <h1>Registration For Vendors</h1>

        <br></br>
        {/* <select id = "user_type" onChange={change_handler} placeholder='Vendor or Buyer'>
                    <option value={"vendor"}>Vendor</option>
                    <option value={"buyer"}>Buyer</option>
                </select> */}

        <br></br>
        <input
          type={"text"}
          name="name_vendor"
          value={user.name_vendor}
          onChange={change_handler}
          placeholder="Enter your name"
        ></input>
        <br></br>
        <input
          type={"text"}
          name="email_vendor"
          value={user.email_vendor}
          onChange={change_handler}
          placeholder="Enter your email"
        ></input>
        <br></br>
        <input
          type={"text"}
          name="password_vendor"
          value={user.password_vendor}
          onChange={change_handler}
          placeholder="Enter your password"
        ></input>
        <br></br>
        <input
          type={"text"}
          name="phone_number_vendor"
          value={user.phone_number_vendor}
          onChange={change_handler}
          placeholder="Enter your phone number"
        ></input>
        <br></br>
        <input
          type={"text"}
          name="open_close_time"
          value={user.open_close_time}
          onChange={change_handler}
          placeholder="Enter your Timings"
        ></input>
        <br></br>
        <input
          type={"text"}
          name="shop_name"
          value={user.shop_name}
          onChange={change_handler}
          placeholder="Enter your Shop Name"
        ></input>
        <br></br>
        <button onClick={Register_vendor}>Register</button>
        <button onClick={() => history.push("/login")}>Login</button>
      </center>
    </div>
  );
};

export default Register;
