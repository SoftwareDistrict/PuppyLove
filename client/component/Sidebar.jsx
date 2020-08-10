import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ user, dog }) {

  const close = () => {
    document.getElementById("mySidenav").style.width = "0px";
  };

  return (
    <div id="mySidenav" className="navbar">
      <button id='settings' onClick={close}>Menu</button>
      <h3>PuppyLove!</h3>
      {dog ?
        (
          <ul className="nav">
            <li id='choice'><Link to="/">Home</Link></li>
            {user ? 
              (<li id='log' name={'Logout'}><Link to="/logout">Logout</Link></li>)
              : (<li id='log' name={'Login'}><Link to="/logout">Login</Link></li>)
            }
            <li id='pro'><Link to="/myprofile">My Profile</Link></li>
            <li id='chats'><Link to="/chats">Chats</Link></li>
            <li id='dog'><Link to="/dogprofile">Profile</Link></li>
            <li id='friend'><Link to="/friends">Friends</Link></li>
            <li id='fav'><Link to="/favs">Favorite Locations</Link></li>
            <li id='loc'><Link to="/popular">Popular Locations</Link></li>
          </ul>
        )
        : (
        <ul className="nav">
          <li id='choice'><Link to="/">Home</Link></li>
          {user ? 
            (<li id='log' name={'Logout'}><Link to="/logout">Logout</Link></li>)
            : (<li id='log' name={'Login'}><Link to="/logout">Login</Link></li>)
          }
          <li id='pro'><Link to="/myprofile">My Profile</Link></li>
          <li id='chats'><Link to="/chats">Chats</Link></li>
          <li id='loc'><Link to="/popular">Popular Locations</Link></li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
