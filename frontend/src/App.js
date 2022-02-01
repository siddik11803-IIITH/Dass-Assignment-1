import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useState} from 'react';

import Login from './components/LRH/login';
import Register from './components/LRH/register';
import Vendorpage from './components/LRH/vendor_home';
import Buyerpage from './components/LRH/buyer_home';

import {BrowserRouter as Router, Switch ,Route,  Link} from 'react-router-dom'

function App() {
  const [user, setLoginUser] = useState({})
  

  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route exact path = "/">
            {(() => {
              if(user && user._id && user.user_type == "Vendor"){
                return <Vendorpage setLoginUser={setLoginUser} user = {user}/>
              }else if(user && user._id && user.user_type == "Buyer"){
                return <Buyerpage setLoginUser={setLoginUser} user = {user}/>
              }else{
                return <Login setLoginUser={setLoginUser}/>
              }
            })()}
          </Route>
          <Route exact path = "/login"><Login setLoginUser = {setLoginUser}/></Route>
          <Route exact path = "/register"><Register /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
