import React from 'react';
import { render } from 'react-dom';
import './styles/tailwind.scss';
import App from './component/App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

render(<Router><App /></Router>, document.getElementById('app'));