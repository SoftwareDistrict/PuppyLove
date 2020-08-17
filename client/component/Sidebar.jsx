import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Sidebar({ sessUser, sessDog, getFriends, allDogs }) {

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
        <Link to={`/dogprofile/${sessDog.id}`} id='dog' data={allDogs} onClick={() => getFriends(sessDog.id)}>Profile</Link>
        <Link to="/popular" id='loc'>Popular Locations</Link>
      </div>
    </div>
  );
};

export default Sidebar;
