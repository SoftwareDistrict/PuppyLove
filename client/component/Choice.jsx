import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';

function Choice({ onLike, dogs }) {

  // const choice = dogs.map(option => {
  //   return (
  //     <div id='choice-box'>
  //       <img src={option.image}/>
  //       <div id='title'>{option.name}</div>
  //       <div id='breed'>{option.breed}</div>
  //       <div id='age'>{option.age}</div>
  //     </div>
  //   );
  // });

  const [ index, setIndex ] = useState(0);
  const [ dogDisplay, setDogDisplay ] = useState('');

  // useEffect(() => {
  //   setDogDisplay(props.dogs[1]);
  // }, [props.dogs[1]]);

  const dislike = () => {
    setIndex(index + 1);
    if (index < dogs.length) {
      setDogDisplay(() => dogs[index]);
    } else {
      setDogDisplay(<div id='choice-box'><h4>Looks like you've made it through all the dogs in you're area. Please check back later.</h4></div>);
    }
  };

  console.log('dogs: ', dogs);
  console.log('index: ', index);
  console.log('dogDisplay: ', dogDisplay);

  // const like = () => {
  //   onLike('Trigger', dogDisplay.name, true)
  //   .then(() => dislike())
  //   .then(() => console.log('this friend was added'))
  //   .catch((err) => console.error(err, 'we nope'));
  // };

  return (
    <div>
      <div>
        {dogDisplay}
        <div id='select'>
          <button id='no' onClick={dislike}>No</button>
          <Link to={'/dogprofile'} id='view'>View Profile</Link>
          <button id='yes' onClick={dislike}>Yes</button>
        </div>
      </div>
        {/* <Route path={`${match.path}/:id`} /> */}
    </div>
  );
};

export default Choice;
 