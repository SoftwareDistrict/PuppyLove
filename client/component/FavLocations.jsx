import React, { useState } from 'react';
import { fromAddress } from 'react-geocode';

function FavLocations({ open, lat, lng }) {
  const [ query, setQuery ] = useState('');

  const findLocation = (event) => {
    fromAddress(event.target.value)
    .then((response) => setQuery(response.results[0].geometry.location))
    .catch(err => console.error('code not set location you searched', err))
  };

  const searchLoc = () => {
    console.log('weeeeeee');
    document.getElementById('loc-search').value = "";
  };

  return (
    <div>
      <button id='settings' onClick={open}>Menu</button>
      <div id='header3'>Favorite Locations</div>
      <input id='loc-search' type='text' style={{ width: '500px', height: '25px', paddingLeft: '10px', fontSize: '16px', margin: '30px 10px 10px 500px'}} onChange={findLocation} />
      <button id='submit-loc-search' type='button' style={{ fontSize: '16px', padding: '5px', paddingLeft: '10px', paddingRight: '10px', borderRadius: '5px', backgroundColor: 'rgb(32, 32, 32)', color: 'rgb(0, 144, 178)' }} onClick={searchLoc}>Search</button>
      <div id="map" style={{ textAlign: 'center', marginTop: '10px', marginLeft: '350px', width: '800px', height: '350px', borderRadius: '50px', backgroundColor: 'rgb(50, 49, 66)' }}>
        <div id='header3' style={{ color: 'rgb(165, 134, 199)', paddingTop: '30px' }}>Lattitude: {lat}</div>
        <div id='header3' style={{ color: 'rgb(165, 134, 199)', marginTop: '20px' }} >Longitude: {lng}</div>
      </div>
      <ul style={{ marginLeft: '100px' }}>
        Location List
        <li>Location</li>
        <li>Location</li>
        <li>Location</li>
        <li>Location</li>
        <li>Location</li>
      </ul>  
    </div>
  );
};

export default FavLocations;