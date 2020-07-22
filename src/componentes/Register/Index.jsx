import React from 'react'
import {Switch, Link, Route } from 'react-router-dom';
import Login from '../Login'
import RegisterForm from './RegisterForm';


const Register = () => {
  return (
    <div className='RegisterImg' >
    <Link to="login" ><button>Login</button></Link>
    <Link to="register" ><button>Registrar</button></Link>
    <Switch>
      <Route path='/login'>
        <Login />
        </Route> 
      <Route path='/register'>
        <RegisterForm />
        </Route> 
    </Switch>
    </div>



  )
}


export default Register