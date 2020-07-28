import React, { useState } from 'react';
import './Login.css';
import Form from './Form';
import { firebaseConfig } from '../../plugins/firebaseConfig'
import "firebase/auth"


export default () => {
    const [email, setEmail] = useState('')

    const forgotPassword = () => {
      firebaseConfig.auth().useDeviceLanguage();
      firebaseConfig.auth().sendPasswordResetEmail(email)
        .then(() => {
          /*alert('Email enviado')*/
          console.log('você está logado')
      })
      .catch((error)=>{
        console.log(error)
      })
    }
    return (
      <div>
            <div>
              <Form saveEmail={setEmail}/>
              <div>
                <h4 className="forgot-password-auth" onClick={forgotPassword}>Esqueceu a senha?</h4>
              </div>
            </div>
            </div>
  )
}