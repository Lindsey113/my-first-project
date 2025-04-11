import './App.css';
import React from 'react'
import helmet from 'helmet';
import {
  Routes,
  Route
} from 'react-router-dom'
import Login from './pages/Login'
import Weather from './pages/Weather'
import Home from './pages/Home'
import { Link } from 'react-router-dom';
import NewMember from './pages/NewMember';


export default function App() {
  return (
    <div className='App'>
      <nav>
        <h1 className='app-header'>My First Project</h1>
        <div className='nav-links'>
          <Link className='home' to='/'>Home</Link>
          <Link className='login' to='login'>Login</Link>
          <Link className='weather' to='weather'>Weather</Link>
        </div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/weather' element={<Weather />}/>
          <Route path='/login/sign-up' element={<NewMember />} />
          </Routes>
      </nav>
    </div>
  );
}

//http://api.weatherstack.com/