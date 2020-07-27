import React from 'react'
import {Switch, Link, Route , BrowserRouter} from 'react-router-dom';
import Login from './Login';
import Singup from '../Register/signup'
import logo from '../../images/Logo.png'
import './Login.css'
//import { AuthProvider} from '../components/Auth';


const Inicial = () => {
  return (

    <div className='background'>
      <div className='container'>

        <div className='imgLogo'>
        <img className="logo"  src={logo} alt="logo"/>
        </div>
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