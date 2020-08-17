import React from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import Friend from './Friend.jsx';

function DogProfile({ match, open, sessUser, sessDog, allDogs, friends, getFriends }) {

  // const unfriend = (friendId) => {
  //   axios.post('/unfriend', { id_dog: sessDog.id, id_friend: friendId, bool_friend: 1 })
  //   .then(() => console.log('see you later!'))
  //   .catch((err) => console.error(err, 'we couldn\'t get rid of this "friend"'));
  // };

  // const friendList = friends.map(({ id, dog_name, image }) => {
  //   return (
  //     <li key={id}>
  //       <div class='profileContainer'>
  //         <div class='profileInfo' style={{ backgroundImage: `url('${image}')` }}>{dog_name}</div>
  //         <Link to={`${match.url}/${id}`} onClick={() => getFriends(id)}>View Profile</Link>
  //         {/* <button id='login' type='button' onClick={() => unfriend(id)}>Unfriend</button> */}
  //       </div>
  //     </li>
  //   );
  // });

  return (
    <div>
      <div class='profileContainer'>
        <button id='settings' onClick={open}>Menu</button>
        <div>
          <Route
            path={'/dogProfile/:id'}
            render={(props) => (<Friend data={allDogs} {...props} />)}
          />
        </div>
        {/* <h3>Friends</h3> */}
        {/* <ul>{friendList}</ul> */}
      </div>
    </div>
  );
};

export default DogProfile;
