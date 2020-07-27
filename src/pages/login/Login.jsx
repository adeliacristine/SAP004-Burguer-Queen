import React, { useState } from 'react';

import './Login.css';
import Form from './Form';
/*import Input from '../components/input';
import BtnP from '../components/button';
import Label from '../components/label';*/

import { firebaseConfig } from '../../plugins/firebaseConfig'
import "firebase/auth"


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
      
      <div className='form-columm'>
            <div>
              <Form saveEmail={setEmail}/>
              <div>
                <h4 className="forgot-password-auth" onClick={forgotPassword}>Esqueceu a senha?</h4>
              </div>
            </div>
            </div>
          
       
      
  )
}