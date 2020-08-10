import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Choice({ user, dogs }) {

  const [ title, setTitle ] = useState(dogs[3].name);
  const [ pic, setPic ] = useState(dogs[3].image);
  const [ kind, setKind ] = useState(dogs[3].breed);
  const [ old, setOld ] = useState(dogs[3].age);

  const nextDog = () => {
    for(let d = 0; d < dogs.length + 1; d++) {
      const rando = Math.floor(Math.random() * d);
      setTitle(dogs[rando].name);
      setPic(dogs[rando].image);
      setKind(dogs[rando].breed);
      setOld(dogs[rando].age);
    }
  };

  return (
    <div>
      <div id='choice-box'>
        <img src={pic}/>
        <div id='title'>{title}</div>
        <div id='breed'>{kind}</div>
        <div id='age'>{old}</div>
      </div>
      <button id='no' onClick={nextDog}>No</button>
      <Link to={'/dogprofile'} id='view'>View Profile</Link>
      <button id='yes' onClick={nextDog}>Yes</button>
    </div>
  );
};

export default Choice;
