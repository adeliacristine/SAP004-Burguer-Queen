import React, { useState } from 'react';
import { firebaseConfig } from '../../plugins/firebaseConfig'
import "firebase/auth"
import '../../App.css'



import './Login.css';
import Form from './Form';

export default () => {
    const [email, setEmail] = useState('')
    const [passwordForgot, setPasswordForgot] = useState('')
    const [passwordForgotError, setPasswordForgotError] = useState('')

    const forgotPassword = () => {
      firebaseConfig.auth().useDeviceLanguage();
      firebaseConfig.auth().sendPasswordResetEmail(email)
        .then(() => {
          setPasswordForgot('Email enviado')
      })
      .catch((error)=>{
        setPasswordForgotError('Não foi possivel enviar o Email, verifique o Email digitado e tente novamente.')
      })
    }

    return (
      <div>
            <div>
              <Form saveEmail={setEmail}/>
              <div>
                <h4 className="forgot-password-auth" onClick={forgotPassword}>Esqueceu a senha?</h4>
              </div>

              <div className='msgError'>
              <p>{passwordForgot} {passwordForgotError}</p>
              </div>

            </div>
            </div>
  )
}