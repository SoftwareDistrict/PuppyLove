import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Choice({ open, sessUser, sessDog, dogs }) {

  const [ index, setIndex ] = useState(0);
  const [ dogDisplay, setDogDisplay ] = useState('');
  const [ allDogs, setAllDogs ] = useState('');

  useEffect(() => {
    setDogDisplay(dogs[0]);
  }, [dogs]);

  useEffect(() => {
    axios.get('/dogs')
    .then((response) => setAllDogs(response.data))
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

  const send = () => {
    // axios.post('/direct', { id: dogs[index].key })
    // .then(() => console.log('yayayaya'))
    // .catch(err => console.error('nooooooo! ', err));
  };

  const addFriend = () => {
    // axios.post('/friends',  { id: dogs[index].key })
    // .then(() => dislike())
    // .then(() => console.log('this friend was added'))
    // .catch((err) => console.error(err, 'we couldn\'t add this friend'));
  };

  return (
    <div>
      <button id='settings' onClick={open}>Menu</button>
      {dogDisplay}
      <div id='select'>
        <button id='no' onClick={dislike}>No</button>
        <Link to={'/dogprofile'} id='view'>View Profile</Link>
        {/* <Link to={`/dogprofile/${dogs[0].key}`} id='view'>View Profile</Link> */}
        {/* <button id="view" onClick={send} style={{ background: "none", border: "none" }}>View Profile</button> */}
        <button id='yes' onClick={addFriend}>Yes</button>
      </div>
    </div>
  );
};

export default Choice;
 