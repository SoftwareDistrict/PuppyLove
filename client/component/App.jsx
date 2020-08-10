import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

   const dogData = [
      {
         name: 'Chester',
         image: "data:image/jpeg;base64,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",
         breed: 'Lab',
         age: '6 months',
      },
      {
         name: 'Alfred',
         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDdgK_SjasmyW5iIx7D3dXd8ENsyid2KPqBA&usqp=CAU',
         breed: 'Lab',
         age: '2 Years',
      },
      {
         name: 'Dante',
         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAumJCIydpbwr6fsam1KPw988HBcsRbMCPkQ&usqp=CAU',
         breed: 'Pug',
         age: '5 Years',
      },
      {
         name: 'Jared',
         image: 'data:image/jpeg;base64,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',
         breed: 'Pomeranian',
         age: '3 Years',
      },
   ];
   const [ user, setUser ] = useState(null);
   const [ dog, setDog ] = useState(null);
   const [ dogs, setDogs ] = useState(dogData);

   const open = () => {
    document.getElementById("mySidenav").style.width = "280px";
  };

//   axios.get('/dog')
//   .then((response) => setDog(response))
//   .catch((err) => console.error(err, 'Could not get dog info.'));
  
//   axios.get('/dogs')
//   .then((response) => setDogs(response))
//   .catch((err) => console.error(err, 'Could not get all dogs.'));

   return (
      <Router>
         <Sidebar user={user} dog={dog} dogs={dogs}/>
         <div className='App'>
            <button id='settings' onClick={open}>Menu</button>
            <Switch>
               <Route exact={true} path="/" render={() => (<Choice user={user} dogs={dogs}/>)} />
               <Route exact path="/logout" render={() => (<Logout user={user} />)} />
               <Route path="/myprofile" render={() => (<MyProfile user={user} />)} />
               <Route exact path="/chats" render={() => (<Chats user={user} />)} />
               <Route path="/dogprofile" render={() => (<DogProfile user={user} dog={dog} dogs={dogs}/>)} />
               <Route path="/friends" render={() => (<Friends user={user} dog={dog} />)} />
               <Route path="/favs" render={() => (<FavLocations user={user} dog={dog} />)} />
               <Route path="/popular" render={() => (<PopularLocations user={user} />)} />
            </Switch>
         </div>
      </Router>
   );
};

export default App;
