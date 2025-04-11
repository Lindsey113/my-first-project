import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <form>
      <h1>Login</h1>
      <label>
        <input type='text' placeholder='Username' />
      </label>
      <label>
        <input type='password' placeholder='Password'/>
      </label>
      <div>
        <button className='submit' type='submit'>Submit</button>
        <Link className='sign-up' to='sign-up'>Are you new here?🤨</Link>
      </div>
    </form>
    

  );
};

export default Login