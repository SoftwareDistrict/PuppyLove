import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ user, users, dog, dogs, setDog }) {

  const close = () => {
    document.getElementById("mySidenav").style.width = "0px";
  };

  return (
    <div id="mySidenav" className="navbar">
      <h3>PuppyLove!</h3>
      <button id='settings' onClick={close}>Menu</button>
      {dog ?
        (
          <div className="nav">
            <Link to="/" id='choice'>Home</Link>
            <Link to="/login" id='log'>Logout</Link>
            <Link to="/myprofile" id='pro'>My Profile</Link>
            <Link to="/chats" id='chats'>Chats</Link>
            <Link to="/dogprofile" id='dog'>Profile</Link>
            <Link to="/friends" id='friend'>Friends</Link>
            <Link to="/favs" id='fav'>Favorite Locations</Link>
            <Link to="/popular" id='loc'>Popular Locations</Link>
          </div>
        )
        : (
        <div className="nav">
            <Link to="/" id='choice'>Home</Link>
            <Link to="/login" id='log'>Logout</Link>
            <Link to="/myprofile" id='pro'>My Profile</Link>
            <Link to="/chats" id='chats'>Chats</Link>
            <Link to="/popular" id='loc'>Popular Locations</Link>
          </div>
      )}
    </div>
  );
};

export default Sidebar;
