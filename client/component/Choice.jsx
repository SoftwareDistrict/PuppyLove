import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';

function Choice({ onLike, dogs }) {

  const [ index, setIndex ] = useState(0);
  const [ dogDisplay, setDogDisplay ] = useState('');

  useEffect(() => {
    setDogDisplay(dogs[1]);
  }, [dogs]);

  const dislike = () => {
    setIndex(index + 1);
    if (index < dogs.length) {
      setDogDisplay(() => dogs[index]);
    } else {
      setDogDisplay(<div id='choice-box'><div id='alt'>Looks like you've made it through all the dogs in you're area. Please check back later.</div></div>);
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
        <div id='select'>
          <button id='no' onClick={dislike}>No</button>
          <Link to={`/dogprofile/${dogDisplay.id}`} id='view'>View Profile</Link>
          <button id='yes' onClick={dislike}>Yes</button>
        </div>
      </div>
        {/* <Route path={`${match.path}/:id`} /> */}
    </div>
  );
};

export default Choice;
 