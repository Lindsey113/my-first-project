import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const APIkey = '3a01c7d21c3f9ee7452b953eb084aa8b'
const url = 'https://api.weatherstack.com/current?access_key=3a01c7d21c3f9ee7452b953eb084aa8b&query=Enderby'

const options = {
  method: 'GET'
}

try {
  const response = await fetch(url, options)
  const result = await response.json()
  console.log(result)
} catch(err){
  console.error(err)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


reportWebVitals();
