import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Sidebar({ dog, currentCoords }) {

  const close = () => {
    document.getElementById("mySidenav").style.width = "0px";
  };

  const logout = () => {
    axios('/logoutt').then(() => {
      console.log('successful logout!!!');
    }).catch(() => {
      console.log('unsucessful logout');
    })
  };
  return (
    <div id="mySidenav" className="navbar">
      <h3>PuppyLove!</h3>
      <button id='settings' onClick={close}>Menu</button>
      {dog ?
        (
          <div className="nav">
            <Link to="/" id='choice'>Home</Link>
            <Link to="/login" id='log' onClick={close}>Logout</Link>
            <Link to="/myprofile" id='pro'>My Profile</Link>
            <Link to="/chats" id='chats'>Chats</Link>
            <Link to="/dogprofile" id='dog'>Profile</Link>
            <Link to="/favs" id='fav' onClick={currentCoords}>Favorite Locations</Link>
            <Link to="/popular" id='loc' onClick={onClick}>Popular Locations</Link>
          </div>
        )
        : (
          <div className="nav">
            <Link to="/" id='choice'>Home</Link>
            <Link to="/login" id='log' onClick={() => {
              logout();
              close();
            }}>Logout</Link>
            <Link to="/myprofile" id='pro'>My Profile</Link>
            <Link to="/chats" id='chats'>Chats</Link>
            <Link to="/popular" id='loc' onClick={currentCoords}>Popular Locations</Link>
          </div>
        )}
    </div>
  );
};

export default Sidebar;
