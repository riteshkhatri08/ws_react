/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
import './index.css';
// You can directly import jsx too
// import {jsx as _jsx} from "react/jsx-dev-runtime"

// Creating an element using apis in React library
// Properties/ attributes
// , text content 
// type of tag

const someMoreText = "Created through React and Vit"

const reactElementToVisitGoogle = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Hey, Click here to visit Google homepage',

);


ReactDOM.createRoot(document.getElementById('root')).render(

  reactElementToVisitGoogle
)
