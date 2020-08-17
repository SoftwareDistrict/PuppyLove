import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';

function Choice({ open, sessUser, sessDog, dogViews, allDogs, getFriends, index, setIndex, dogDisplayInfo, setDogDisplayInfo }) {

  const [ dogDisplay, setDogDisplay ] = useState('');

  useEffect(() => {
    setDogDisplay(dogViews[0]);
  }, [dogViews]);

  const dislike = () => {
    setIndex(index + 1);
    if (index < dogViews.length) {
      setDogDisplay(() => dogViews[index]);
      setDogDisplayInfo(allDogs[index]);
    } else {
      setDogDisplay(<div id='choice-box'><div id='alt'>Looks like you've made it through all the dogs in you're area. Please check back later.</div></div>);
    }
  };

  // const addFriend = () => {
  //   axios.post('/friends',  {
  //     id_dog: sessDog.id,
  //     id_friend: dogDisplayInfo.id,
  //     bool_friend: 0
  //   })
  //   .then(() => dislike())
  //   .then(() => console.log('this friend was added'))
  //   .catch((err) => console.error(err, 'we couldn\'t add this friend'));
  // };

  return (
    <div>
      <div>
        <button id='settings' onClick={open}>Menu</button>
        {dogDisplay}
        <div id='select'>
          <button id='no' onClick={dislike}>No</button>
          <Link to={`/dogprofile/${dogDisplayInfo.id}`} id='view' onClick={() => getFriends(dogDisplayInfo.id)}>View Profile</Link>
          <button id='yes' onClick={dislike}>Yes</button>
        </div>
      </div>
    </div>
  );
};

export default Choice;
 