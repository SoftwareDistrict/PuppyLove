import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './Sidebar.jsx';
import Choice from './Choice.jsx';
import Logout from './Logout.jsx';
import MyProfile from './MyProfile.jsx';
import Chats from './Chats.jsx';
import DogProfile from './DogProfile.jsx';
import Friends from './Friends.jsx';
import FavLocations from './FavLocations.jsx';
import PopularLocations from './PopularLocations.jsx';

function App() {
   const [ dogs, setDogs ] = useState('');
   const [ users, setUsers ] = useState('');

   const open = () => {
      document.getElementById("mySidenav").style.width = "280px";
   };

   useEffect(() => {
      axios.get('/dogs')
      .then((response) => {
         return response.data.map(option => {
            return (
               <div id='choice-box'>
                  <img src={option.image}/>
                  <div id='title'>{option.name}</div>
                  <div id='breed'>{option.breed}</div>
                  <div id='age'>{option.age}</div>
               </div>
            );
         });
      })
      .then((choices) => setDogs(choices))
      .catch((err) => console.error(err, 'Could not get all dogs.'));
   }, []); 

   // useEffect(() => {
   //    axios.get('/users')
   //    .then((response) => setUsers(response.data))
   //    .catch((err) => console.error(err, 'Could not get all users.'));
   // }, []);

   const addFriend = (name, friendName, bool) => {
      axios.post('/friends', { name, friendName, bool })
      .then(() => console.log('this friend was added'))
      .catch((err) => console.error(err, 'we couldn\'t add this friend'));
   };

   console.log('choices: ', dogs);
   // console.log('users: ', users);

   return (
      <Router>
         <Sidebar users={users} dogs={dogs} />
         <div className='App'>
            <button id='settings' onClick={open}>Menu</button>
            <Switch>
               <Route exact={true} path="/" render={() => (<Choice onLike={addFriend} dogs={dogs} />)} />
               <Route exact path="/logout" render={() => (<Logout users={users} />)} />
               <Route path="/myprofile" render={() => (<MyProfile dogs={dogs} />)} />
               <Route path="/chats" render={() => (<Chats users={users} />)} />
               <Route path="/dogprofile" render={() => (<DogProfile />)} />
               <Route path="/friends" render={() => (<Friends dogs={dogs} />)} />
               <Route path="/favs" render={() => (<FavLocations />)} />
               <Route path="/popular" render={() => (<PopularLocations />)} />
            </Switch>
         </div>
      </Router>
   );
};

export default App;
