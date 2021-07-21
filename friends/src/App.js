import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import './App.css';
import FriendsList from './componenets/FriendsList';
import Login from './componenets/Login';

import axiosWithAuth from './componenets/utils/axiosWithAuth';
import ProtectedRoute from './componenets/utils/ProtectedRoute';

function App() {

  const logout = () => {
    axiosWithAuth()
    .post('/logout')
    .then(res => {
      localStorage.removeItem('token');
      localStorage.setItem('username');
      localStorage.setItem('role');
      window.location.href = "/login";
    })
    .catch(err => {
      console.log(err);
    })
  };

  return (
    <Router>
      <div className="App">
        <div className='logout'>
          <li>
            {localStorage.getItem('token') ? <Link onClick={logout} to='/login' /> : <div></div>}
          </li>
        </div>
        <Switch>
          <ProtectedRoute path='/friendsList'>
            <h1>All Your Friends:</h1>
            <FriendsList />
            
          </ProtectedRoute >
          <Route path='/login' >

            <h1>Make a list of all the Friends you don't have!</h1>
            <div className='cta-login'>
              <Link to="/login">Login</Link>
              <Login />
            </div>
          </Route>
          <Route>
            <Redirect to='/login' />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
