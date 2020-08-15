import React, { useState, useEffect } from 'react';
import { fromAddress } from 'react-geocode';
import axios from 'axios';

function PopularLocations({ map, open, sessUser, sessDog, lat, lng }) {
  const [ query, setQuery ] = useState('');
  const [ name, setName ] = useState('');
  const [ desc, setDesc ] = useState('');
  const [ coords, setCoords ] = useState('');
  const [ image, setImage ] = useState('');
  const [ places, setPlaces ] = useState('');

  useEffect(() => {
    axios.get('/loc')
    .then(response => {
      return response.data.map(place => {
        return (
          <div id='locbox'>
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

  // useEffect(() => {
  //   map();
  // }, []);

  const addLoc = () => {
    axios.post('/loc', {
      location_name: name,
      description: desc,
      latitiude: coords[0],
      longitude: coords[1],
      image_url: image,
    })
    .then(() => console.log('sending location to backend'))
    .cathc(() => console.error('could not send this location info ', err));
  };

  const displayForm = () => { 
    document.getElementById("under").appendChild(
      <div id="location-form">
        <h3>Describe This Location</h3>
        <div class="sc-container">
            <input classname='create' onChange={(event) => { setName(event.target.value) }} type="text" placeholder="Location Name" /><br /><br />
            <input classname='create' onChange={(event) => { setImage(event.target.value) }} type="text" placeholder="Add an Image" /><br /><br />
            <input classname='create' onChange={(event) => { setDesc(event.target.value) }} type="text" placeholder="Description" /><br /><br />
            <button id="login" type="button" onClick={() => addLoc()}>Submit</button>
        </div>
      </div>
    );
  };
  
  const searchLoc = () => {
    fromAddress(query)
    .then((response) => setCoords(response.results[0].geometry.location))
    .then(() => document.getElementById('loc-search').value = "")
    .catch(err => console.error('code not set location you searched', err));
  };

  return (
    <div>
      <button id='settings' onClick={open}>Menu</button>
      <div id='header3'>Popular Locations</div>
      <input id='loc-search' type='text' style={{ width: '500px', height: '25px', paddingLeft: '10px', fontSize: '16px', margin: '30px 10px 10px 500px'}} onChange={(event) => { setQuery(event.target.value) }} />
      <button id='submit-loc-search' type='button' style={{ fontSize: '16px', padding: '5px', paddingLeft: '10px', paddingRight: '10px', borderRadius: '5px', backgroundColor: 'rgb(32, 32, 32)', color: 'rgb(0, 144, 178)' }} onClick={searchLoc}>Search</button>
      <div id="map" style={{ textAlign: 'center', marginTop: '10px', marginLeft: '350px', width: '800px', height: '350px', borderRadius: '50px', backgroundColor: 'rgb(50, 49, 66)' }}>
        <div id='header3' style={{ color: 'rgb(165, 134, 199)', paddingTop: '30px' }}>Lattitude: {lat}</div>
        <div id='header3' style={{ color: 'rgb(165, 134, 199)', marginTop: '20px' }} >Longitude: {lng}</div>
      </div>
      <button id="login" type="button" onClick={displayForm}>Add This Location</button>
      <div id="under"></div>
      <ul style={{ marginLeft: '100px' }}>
        Location List
        <br /><br />
        {places}
      </ul>
    </div>
  );
};

export default PopularLocations;
