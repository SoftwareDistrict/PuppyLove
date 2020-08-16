import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Geocode from 'react-geocode';
import axios from 'axios';

function PopularLocations({ open, sessUser, sessDog, lat, lng }) {
  const [ query, setQuery ] = useState('');
  const [ name, setName ] = useState('');
  const [ desc, setDesc ] = useState('');
  const [ coords, setCoords ] = useState('');
  const [ image, setImage ] = useState('');
  const [ places, setPlaces ] = useState('');
  const [ clicked, setClicked ] = useState(false);

  const API_KEY = 'AIzaSyAIShYGz5mXtO2XtWhaOHlrmDz33fKCnmE';
  Geocode.setApiKey(API_KEY);

 useEffect(() => setCoords({ lat, lng }), []);

  useEffect(() => {
    axios.get('/loc')
    .then(response => {
      return response.data.map(place => {
        return (
          <div id='locbox' style={{ fontSize: '20px', marginLeft: '100px', flexDirection: 'row' }}>
            <img src={place.image_url} />
            <div>Name: {place.location_name}</div>
            <div>Desc: {place.description}</div>
          </div>
        );
      });
    })
    .then(locList => setPlaces(locList))
    .then(() => console.log('Here are your locations'))
    .catch(err => console.error('could not get locations ', err));
  }, []);

  const addLoc = () => {
    axios.post('/loc', {
      location_name: name,
      latitude: coords.lat,
      longitude: coords.lng,
      description: desc,
      image_url: image,
    })
    .then(() => setClicked(false))
    .catch((err) => console.info('could not send this location info ', err));
  };

  const displayForm = () => setClicked(true);

  const form = (
    <div id="location-form">
      <h3>Describe This Location</h3>
      <div class="sc-container">
          <input classname='create' onChange={(event) => setName(event.target.value)} type="text" placeholder="Location Name" /><br /><br />
          <input classname='create' onChange={(event) => setImage(event.target.value)} type="text" placeholder="Add an Image" /><br /><br />
          <input classname='create' onChange={(event) => setDesc(event.target.value)} type="text" placeholder="Description" /><br /><br />
          <button id="login" type="button" onClick={() => addLoc()}>Submit</button>
      </div>
    </div>
  );

  const searchLoc = () => {
    console.log(coords);
    Geocode.fromAddress(query)
    .then((response) => {
      setCoords(response.results[0].geometry.location)
      console.log(coords);
    })
    .then(() => document.getElementById('loc-search').val(""))
    .catch(err => console.error('could not set location you searched', err));
  };

  return (
    <div>
      <button id='settings' onClick={open}>Menu</button>
      <div id='header3'>Popular Locations</div>
      <input id='loc-search' type='text' style={{ width: '500px', height: '25px', paddingLeft: '10px', fontSize: '16px', margin: '30px 10px 10px 450px'}} onChange={(event) => { setQuery(event.target.value) }} />
      <button id='submit-loc-search' type='button' style={{ fontSize: '16px', padding: '5px', paddingLeft: '10px', paddingRight: '10px', borderRadius: '5px', backgroundColor: 'rgb(32, 32, 32)', color: 'rgb(0, 144, 178)' }} onClick={searchLoc}>Search</button>
      <LoadScript googleMapsApiKey={API_KEY}>
        <GoogleMap mapContainerStyle={{ width: '70vw', height: '60vh', marginLeft: '200px', marginBottom: '20px', border: '5px solid #333', borderRadius: '20px' }} center={coords} zoom={10}></GoogleMap>
      </LoadScript>
      <button id="loginn" type="button" onClick={displayForm}>Add This Location</button>
      <div id="under">{clicked ? form : <div></div>}</div>
        Location List
      <ul>
        {places}
      </ul>
    </div>
  );
};

export default PopularLocations;
