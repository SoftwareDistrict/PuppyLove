import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';

function Choice({ open, onLike, dogs }) {

  const [ index, setIndex ] = useState(0);
  const [ dogDisplay, setDogDisplay ] = useState('');
  const [ pups, setPups ] = useState('');

  useEffect(() => {
    setDogDisplay(dogs[1]);
  }, [dogs]);

  useEffect(() => {
      axios.get('/dogs')
      .then((response) => setPups(response.data))
      .catch((err) => console.error(err, 'Could not get all dogs.'));
   }, []); 

  const dislike = () => {
    setIndex(index + 1);
    if (index < dogs.length) {
      setDogDisplay(() => dogs[index]);
    } else {
      setDogDisplay(<div id='choice-box'><div id='alt'>Looks like you've made it through all the dogs in you're area. Please check back later.</div></div>);
    }
  };

  const like = () => {
    onLike('Trigger', pups.name, true)
    .then(() => dislike())
    .then(() => console.log('this friend was added'))
    .catch((err) => console.error(err, 'we nope'));
  };

  console.log('dogs: ', dogs);
  console.log('pups: ', pups);
  console.log('dogDisplay: ', dogDisplay);

  return (
    <div>
      <div>
        <button id='settings' onClick={open}>Menu</button>
        {dogDisplay}
        <div id='select'>
          <button id='no' onClick={dislike}>No</button>
          <Link to={`/dogprofile/${pups.id}`} id='view'>View Profile</Link>
          <button id='yes' onClick={like}>Yes</button>
        </div>
      </div>
        {/* <Route path={`${match.path}/:id`} /> */}
    </div>
  );
};

export default Choice;
 

// const choice = dogs.map(option => {
//   return (
//     <div id='choice-box' style={{ backgroundImage: `url('${option.image}')` }}>
//       <div id='title'>{option.name}</div>
//       <div id='breed'>{option.breed}</div>
//       <div id='age'>{option.age}</div>
//     </div>
//   );
// });