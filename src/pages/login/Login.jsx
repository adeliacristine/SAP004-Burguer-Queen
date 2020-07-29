import React, { useState } from 'react';
import './Login.css';
import Form from './Form';
import { firebaseConfig } from '../../plugins/firebaseConfig'
import "firebase/auth"
import '../../App.css'




export default () => {
    const [email, setEmail] = useState('')
    const [errorMsgForgot, setErrorMsgForgot] = useState('')
    const [msgForgot, setMsgForgot] = useState('')

    const forgotPassword = () => {
      firebaseConfig.auth().useDeviceLanguage();
      firebaseConfig.auth().sendPasswordResetEmail(email)
        .then(() => {
          setMsgForgot('Email enviado')
      })
      .catch((error)=>{
          console.log(error)
          setErrorMsgForgot('Não foi possivel enviar o Email, verifique o Email digitado e tente novamente.')
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
              <p>{errorMsgForgot} {msgForgot}</p>
              </div>

            </div>
            </div>
  )
}