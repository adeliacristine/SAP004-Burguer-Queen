import React, { useState } from 'react';
import { firebaseConfig } from '../../plugins/firebaseConfig'
import "firebase/auth";
import Input from '../components/input/input';
import BtnP from '../components/button/button';
import Label from '../components/label/label';
import errorCode from './Firabase_error';
import '../../App.css'

export default (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  let [errorMsg, setErrorMsg] = useState('')

  const functionSetEmail = (element) => {
    setEmail(element)
    props.saveEmail(element)
  }

  const login = (event) => {
    event.preventDefault()
    firebaseConfig.auth().signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response, "Usuário logado")
      })
      .catch((error) => {
        if (errorCode[error.code]){
          console.log(errorCode[error.code])
          setErrorMsg(errorCode[error.code])
        } else {
          (setErrorMsg('Ocorreu um erro. Tente novamente!'))
        }        
        
      })
  }
    return (
        <>
          <form>
              <Label className ='label'>Email</Label>
              <Input className='input' type="text" value={email} onChange={e => functionSetEmail(e.target.value)} />
              <Label className ='label'>Senha</Label>
              <Input className='input' type="password" value={password} onChange={e => setPassword(e.target.value)} />
              <BtnP className='btnLogCad btn-warning' type="submit" title='Login' onClick={login}>Login</BtnP>
          </form>
         <div className='msgError'>
           <p>{errorMsg}</p>
           </div>
        </>
    )
}