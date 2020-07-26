import React from 'react';

import './Login.css';
import { firebaseConfig } from '../../plugins/firebaseConfig'
import "firebase/auth"
import Form from './Form'
import logo from '../../images/Logo.png'

const forgotPassword = () => {
  firebaseConfig.auth().onAuthStateChanged((user) => {
    firebaseConfig.auth().useDeviceLanguage();
    firebaseConfig.auth().sendPasswordResetEmail(user.email)
      .then(() => {
        alert('Email enviado')
      })
  })
}

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
                <h4 className="forgot-password-auth" onClick={forgotPassword}>Esqueceu a senha?</h4>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}