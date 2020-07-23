import React from 'react'
import {Switch, Link, Route , BrowserRouter} from 'react-router-dom';
import Login from './Login';
import Singup from '../Register/singup'
import logo from '../../images/Logo.png'
import './Login.css'


const Inicial = () => {
  return (

    <div className='background'>
      <div>
      <img className="logo"  src={logo} alt="logo"/>
      <div className="box-auth" >
      <div className="header-box-auth"> 
            <div>
            <BrowserRouter> 
        <Link className='router-init router-login' to="login" >Login</Link>
        <Link className='router-init' to="singup" >Registrar</Link>
    <Switch>
      <Route path='/login'>
       <Login />
        </Route> 
      <Route path='/singup'>
       <Singup />
        </Route> 
    </Switch>
      </BrowserRouter>
          </div>
          </div>
      </div>
      </div>
    </div>
  )
}


export default Inicial