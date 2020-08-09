import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Choice from './Choice.jsx';
import Logout from './Logout.jsx';
import MyProfile from './MyProfile.jsx';
import Chats from './Chats.jsx';
import DogProfile from './DogProfile.jsx';
import Friends from './Friends.jsx';
import FavLocations from './FavLocations.jsx';
import PopularLocations from './PopularLocations.jsx';

function Sidebar({ user, dog }) {

  const close = () => {
    document.getElementById("mySidenav").style.width = "0px";
  }

  return (
    <div id="mySidenav" className="navbar">
      <button id='settings' onClick={close}>Menu</button>
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
      <Switch>
        <Route exact={true} path="/" render={() => (<Choice user={user} />)} />
        <Route exact path="/logout" render={() => (<Logout user={user} />)} />
        <Route path="/myprofile" render={() => (<MyProfile user={user} />)} />
        <Route exact path="/chats" render={() => (<Chats user={user} />)} />
        <Route path="/dogprofile" render={() => (<DogProfile user={user} dog={dog} />)} />
        <Route path="/friends" render={() => (<Friends user={user} dog={dog} />)} />
        <Route path="/favs" render={() => (<FavLocations user={user} dog={dog} />)} />
        <Route path="/popular" render={() => (<PopularLocations user={user} />)} />
      </Switch>
    </div>
  );
};

export default Sidebar;

// return (
// <div className="navbar">
//   <button id='settings-close'>Menu</button>
  // <ul className="nav">
  //   <li id='choice'><Link to="/">Home</Link></li>
  //   <li id='pro'><Link to="/myprofile">My Profile</Link></li>
  //   <li id='chats'><Link to="/chats">Chats</Link></li>
  //   <li id='dog'><Link to="/dogprofile">Profile</Link></li>
  //   <li id='friend'><Link to="/friends">Friends</Link></li>
  //   <li id='fav'><Link to="/favs">Favorite Locations</Link></li>
  //   <li id='loc'><Link to="/popular">Popular Locations</Link></li>
  // </ul>
//   <Switch>
//     <Route exact={true} path="/" render={() => (<Choice user={user} />)} />
//     <Route path="/myprofile" render={() => (<MyProfile user={user} />)} />
//     <Route exact path="/chats" render={() => (<Chats user={user} />)} />
    // <Route path="/dogprofile" render={() => (<DogProfile user={user} />)} />
    // <Route path="/friends" render={() => (<Friends user={user} />)} />
    // <Route path="/favs" render={() => (<FavLocations user={user} />)} />
//     <Route path="/popular" render={() => (<PopularLocations user={user} />)} />
//   </Switch>
// </div>
// );