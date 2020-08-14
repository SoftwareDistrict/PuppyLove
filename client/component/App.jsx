import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './Sidebar.jsx';
import Choice from './Choice.jsx';
import Login from './Login.jsx';
import MyProfile from './MyProfile.jsx';
import Chats from './Chats.jsx';
import DogProfile from './DogProfile.jsx';
import FavLocations from './FavLocations.jsx';
import PopularLocations from './PopularLocations.jsx';

function App() {
   const [ dogs, setDogs ] = useState('');
   const [ users, setUsers ] = useState('');
   const [ lat, setLat ] = useState('');
   const [ lng, setLng ] = useState('');
   const [ currentDog, setCurrentDog ] = useState('');
   const [ currentUser, setCurrentUser ] = useState('');

   const open = () => {
      document.getElementById("mySidenav").style.width = "280px";
   };

   // THIS DOES NOT RETURN THE DOGS AS YOU WOULD EXPECT
   useEffect(() => {
      axios.get('/dogs')
      .then((response) => {
         return response.data.map(option => {
            return (
               <div id='choice-box' style={{ backgroundImage: `url('${option.image}')` }}>
                  <div id='title'>{option.name}</div>
                  <div id='breed'>{option.breed}</div>
                  <div id='age'>{`${option.age} Years Old`}</div>
               </div>
            );
         });
      })
      .then((choices) => setDogs(choices))
      .catch((err) => console.error(err, 'Could not get all dogs.'));
   }, []); 

   //THIS ONE WOULD RETURN THE DOGS AS YOU WOULD EXPECT
   //   useEffect(() => {
   //    axios.get('/dogs')
   //    .then((response) => setDogs(response.data))
   //    .catch((err) => console.error(err, 'Could not get all dogs.'));
   // }, []);

   useEffect(() => {
      axios.get('/users')
      .then((response) => setUsers(response.data))
      .catch((err) => console.error(err, 'Could not get all users.'));
   }, []);

   const addFriend = (name, friendName, bool) => {
      axios.post('/friends', { name, friendName, bool })
      .then(() => console.log('this friend was added'))
      .catch((err) => console.error(err, 'we couldn\'t add this friend'));
   };

   const findCurrentLocation = () => {
    const x = document.getElementById("map");
    
    const showPosition = (position) => {
      setLng(position.coords.longitude);
      setLat(position.coords.latitude);
      // x.innerHTML = `Latitude: ${position.coords.latitude} <br>Longitude: ${position.coords.longitude}`;
    }
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

   return (
      <Router>
         <Sidebar currentCoords={findCurrentLocation} dog={currentDog} />
         <div className='App'>
            <Switch>
               <Route exact={true} path="/" render={() => (<Choice open={open} onLike={addFriend} dog={currentDog} dogs={dogs} />)} />
               <Route exact path="/login" render={() => (<Login />)} />
               <Route path="/myprofile" render={() => (<MyProfile open={open} />)} />
               <Route exact path="/chats" render={({ match }) => (<Chats open={open} users={users} />)} />
               <Route path="/dogprofile" render={() => (<DogProfile open={open} />)} />
               <Route path="/favs" render={() => (<FavLocations open={open} lat={lat} lng={lng} />)} />
               <Route path="/popular" render={() => (<PopularLocations open={open} lat={lat} lng={lng} />)} />
            </Switch>
         </div>
      </Router>
   );
};

export default App;
