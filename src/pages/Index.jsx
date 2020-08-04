import React from 'react'
import {Switch, Route ,Link, BrowserRouter} from 'react-router-dom';
import Login from './login/Login';
import Singup from './Register/signup'
import Hall from './Hall'
import logo from '../../src/images/Logo.png'
import '../App.css'
//import Lk from '../components/link/link'
import '../../src/pages/components/link/link.css';

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
                <Link className='link' to="/" >Login</Link>
                <Link className='link' to="singup" >Registrar</Link>
                <Switch>
                  <Route exact path='/'>
                <Login />
                </Route> 
                  <Route path='/singup'>
                <Singup />
                </Route> 
                <Route path="/hall">
                  <Hall />
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