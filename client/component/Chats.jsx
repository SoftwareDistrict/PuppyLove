import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom'
import axios from 'axios';
import Chat from './Chat.jsx';

function Chats({ open, match, users, messages }) {

  const [ newChatName, setNewChatName ] = useState('');

  const chats = users.map(owner => {
    return (
      <li>
        <Link to={`/chat/${owner.username}`}>{owner.username}</Link>
      </li>
    );
  });

  const newChange = (event) => {
    setNewChatName(event.target.value);
  };

  const newChat = (username) => {
    return new Chat(username);
  };

  return (
    <div>
      <button id='settings' onClick={open}>Menu</button>
      <h2 style={{ marginBottom: '500px' }}>Chats</h2>
      <div id='convos' style={{ position: 'absolute', width: '900px', height: '500px', left: '325px', top: '200px' }}>
        <ul>{ chats }</ul>
        <input id='input' style={{ position: 'absolute', right: '75px', bottom: '20px', width: '200px', height: '20px', fontSize: '14px', margin: '10px 0 10px 340px', paddingLeft: '10px' }} type="text" value={newChatName} onChange={newChange}/>
        <button id='newchat' style={{ position: 'absolute', right: '75px', bottom: '0', fontSize: '16px', padding: '3px', paddingLeft: '5px', paddingRight: '5px', borderRadius: '5px' }} onClick={newChat}>Start Chat</button>
      </div>
      <Route
        path={'/chat/:username'}
        render={(props) => <Chat data={messages} {...props} />}
      />
    </div>
  );
};

export default Chats;