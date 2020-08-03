import React from 'react'
import {Switch, Route , BrowserRouter, Link} from 'react-router-dom';
import Login from '../pages/login/Login';
import Singup from '../pages/Register/signup'
import logo from '../../src/images/Logo.png'
import '../App.css'
import '../../src/pages/components/link/link.css';
//import PrivateRoute from './privateRoute'
//import Hall from '../pages/hall/Hall'
//import Kitchen from '../pages/Kitchen'

const Inicial = () => {
  return (

    <div className='background'>
      <div className='container'>

        <div>
        <img className="logo"  src={logo} alt="logo"/>
        </div>
      <div className="box-auth" >
      <div className="header-box-auth"> 
            <div>
            <BrowserRouter> 
        <Link className='link' to="login" >Login</Link>
        <Link className='link' to="singup" >Registrar</Link>
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