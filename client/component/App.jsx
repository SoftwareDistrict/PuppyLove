import React, { useState } from 'react';
import Choice from './Choice.jsx';

function App() {
   const [ hiya ] = useState('hiya');
   return(
      <div>
         <Choice hiya={hiya}/>
      </div>
   );
}
export default App;