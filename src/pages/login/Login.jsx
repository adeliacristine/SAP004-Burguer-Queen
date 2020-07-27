import React, { useState } from 'react';

import './Login.css';
import { firebaseConfig } from '../../plugins/firebaseConfig'
import "firebase/auth"
import Form from './Form'
import logo from '../../images/Logo.png'

export default () => {
    const [email, setEmail] = useState('')

    const forgotPassword = () => {
      firebaseConfig.auth().useDeviceLanguage();
      firebaseConfig.auth().sendPasswordResetEmail(email)
        .then(() => {
          alert('Email enviado')
      })
    }
    
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
              <Form saveEmail={setEmail}/>
              <div>
                <h4 className="forgot-password-auth" onClick={forgotPassword}>Esqueceu a senha?</h4>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}