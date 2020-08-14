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
import SignUp from './SignUp.jsx';

function App() {
   const [dogs, setDogs] = useState('');
   const [users, setUsers] = useState('');
   const [lat, setLat] = useState('');
   const [lng, setLng] = useState('');
   const [currentDog, setCurrentDog] = useState('');
   const [currentUser, setCurrentUser] = useState('');
   const [session, setSession] = useState('');



   const [userDogs] = useState([
      {
         name: 'Lucky',
         image: 'https://doggiedesigner.com/wp-content/uploads/2020/06/rottweiler-1535951_1280.jpg'
      },
      {
         name: 'Spot',
         image: 'https://d3e1m60ptf1oym.cloudfront.net/2bf4b80f-2ed9-4c3b-85b9-20e4ba8e38b9/Hurt-Deanna-78_xgaplus.jpg',
         breed: 'Rottweiler',
         weight: 45,
         age: 1,
         fixed: true,
         description: 'Lucky is looking for his future babymama! He loves sniffin poop and likes to meditate during his free time. Swipe right so you can get lucky ;) ',
         friendsArr: [
            {
               name: 'Chester',
               image: "data:image/jpeg;base64,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"
            },
            {
               name: 'Alfred',
               image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDdgK_SjasmyW5iIx7D3dXd8ENsyid2KPqBA&usqp=CAU',
            }]
      },
      {
         name: 'Chester',
         image: "data:image/jpeg;base64,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"
      },
      {
         name: 'Alfred',
         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDdgK_SjasmyW5iIx7D3dXd8ENsyid2KPqBA&usqp=CAU',
      }
   ]);







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


   useEffect(() => {
      axios.get('/session')
         .then((response) => {
            console.log(response);
            setSession(response.data)
         })
         .catch((err) => console.error(err, 'Could not get all sessions.'));
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

   console.log('session', session);

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
               <Route path="/signUp" render={() => (<SignUp />)} />
            </Switch>
         </div>
      </Router>
   );
};

export default App;
