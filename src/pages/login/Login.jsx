import React from 'react';

import './Login.css';
import Form from './Form'
import logo from '../../images/Logo.png'

export default () => {
    return (
      <>
        <div className="background">
          <img className="logo" src={logo} alt="logo"/>
          <div className="box-auth">
            <div className="header-box-auth"> 
              <h3>Login</h3>
              <h3>Registrar</h3>
            </div>
            <div>
              <Form/>
              <div>
                <h4 className="forgot-password-auth">Esqueceu a senha?</h4>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}