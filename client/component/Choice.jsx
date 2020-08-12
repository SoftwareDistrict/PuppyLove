import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';

function Choice({ onLike, dogs }) {

  const [ index, setIndex ] = useState(0);
  const [ dogDisplay, setDogDisplay ] = useState('');

  const dislike = () => {
    setIndex(index + 1);
    if (index < dogs.length) {
      setDogDisplay(() => dogs[index]);
    } else {
      setDogDisplay(<div id='choice-box'><h4>Looks like you've made it through all the dogs in you're area. Please check back later.</h4></div>);
    }
  };

  const like = () => {
    onLike('Trigger', dogDisplay.name, true)
    .then(() => dislike())
    .then(() => console.log('this friend was added'))
    .catch((err) => console.error(err, 'we nope'));
  };

  return (
    <div>
      <div>
        {dogDisplay}
        <button id='no' onClick={dislike}>No</button>
        <Link to={'/dogprofile'} id='view'>View Profile</Link>
        <button id='yes' onClick={dislike}>Yes</button>
      </div>
        {/* <Route path={`${match.path}/:id`} /> */}
    </div>
  );
};

export default Choice;
 