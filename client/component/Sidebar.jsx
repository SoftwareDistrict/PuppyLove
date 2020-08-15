import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Sidebar({ map, sessUser, sessDog }) {

  const close = () => {
    document.getElementById("mySidenav").style.width = "0px";
  };

  const logout = () => {
    axios.get('/logout')
    .then(() => console.log('successful logout'))
    .catch((err) => console.log('unsucessful logout: ', err))
  };
  
  return (
    <div id="mySidenav" className="navbar">
      <h3>PuppyLove!</h3>
      <button id='settings' onClick={close}>Menu</button>
      <div className="nav">
        <Link to="/" id='choice'>Home</Link>
        <Link to="/login" id='log' onClick={() => {
          logout();
          close();
        }}>Logout</Link>
        <Link to="/myprofile" id='pro'>My Profile</Link>
        <Link to="/dogprofile" id='dog'>Profile</Link>
        <Link to="/popular" id='loc' onClick={map}>Popular Locations</Link>
      </div>
    </div>
  );
};

export default Sidebar;
