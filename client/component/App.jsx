import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';
import Choice from './Choice.jsx';

function App() {
   const [ user ] = useState(null);
   const [ dog ] = useState(null);

   const open = () => {
    document.getElementById("mySidenav").style.width = "280px";
  }

   return (
      <div>
         <Sidebar user={user} dog={dog} />
         <Router>
            <div className='App'>
               <button id='settings' onClick={open}>Menu</button>
               <Choice />
            </div>
         </Router>
      </div>
   );
};

export default App;
