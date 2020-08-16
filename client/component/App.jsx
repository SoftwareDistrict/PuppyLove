import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './Sidebar.jsx';
import Choice from './Choice.jsx';
import Login from './Login.jsx';
import MyProfile from './MyProfile.jsx';
import DogProfile from './DogProfile.jsx';
import PopularLocations from './PopularLocations.jsx';
import SignUp from './SignUp.jsx';

function App() {
   const [ dogs, setDogs ] = useState('');
   const [ lat, setLat ] = useState('');
   const [ lng, setLng ] = useState('');
   const [ sessUser, setSessUser ] = useState('');
   const [ sessDog, setSessDog ] = useState('');

   useEffect(() => {
      axios.get('/session')
      .then(response => setSessUser(response.data))
      .catch(err => console.error(err));
   }, []);

  useEffect(() => {
    axios.get('/currentDog')
    .then(response => setSessDog(response.data))
    .catch(err => console.error('could not set session dog: ', err));
  });

   useEffect(() => {
      axios.get('/dogs')
         .then(response => {
            return response.data.map(option => {
               return (
                  <div id='choice-box' key={option.id} style={{ backgroundImage: `url('${option.image}')` }}>
                     <div id='title'>{option.dog_name}</div>
                     <div id='breed'>{option.breed}</div>
                     <div id='age'>{`${option.age} Years Old`}</div>
                  </div>
               );
            });
         })
         .then(choices => setDogs(choices))
         .catch(err => console.error(err, 'Could not get all dogs.'));
   }, []);

    useEffect(() => {
      const showPosition = (position) => {
         setLng(position.coords.longitude);
         setLat(position.coords.latitude);
      }

      if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(showPosition);
      } else {
         console.log("Geolocation is not supported by this browser....");
      }
   }, []);

   const open = () => {
      document.getElementById("mySidenav").style.width = "280px";
   };

   return (
      <Router>
         <Sidebar sessUser={sessUser} sessDog={sessDog} />
         <div className='App'>
            <Switch>
               <Route exact={true} path="/" render={() => (<Choice open={open} sessUser={sessUser} sessDog={sessDog} dogs={dogs} />)} />
               <Route exact path="/login" render={() => (<Login />)} />
               <Route path="/myprofile" render={() => (<MyProfile open={open} sessUser={sessUser} sessDog={sessDog} />)} />
               <Route path="/dogprofile" render={() => (<DogProfile open={open} sessUser={sessUser} sessDog={sessDog} />)} />
               <Route path="/popular" render={() => (<PopularLocations sessUser={sessUser} sessDog={sessDog} open={open} lat={lat} lng={lng} />)} />
               <Route path="/signUp" render={() => (<SignUp sessUser={sessUser} sessDog={sessDog} />)} />
            </Switch>
         </div>
      </Router>
   );
};

export default App;
