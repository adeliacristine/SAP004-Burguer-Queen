import React, { useState } from 'react';
import { firebaseConfig } from '../../plugins/firebaseConfig'
import "firebase/auth";
import Input from '../components/input/input';
import BtnP from '../components/button/button';
import Label from '../components/label/label';

/*const errorMessages = {
  "auth/user-not-found":
    'Usuário não cadastrado',
  "auth/wrong-password":
    'Senha incorreta',
  "auth/invalid-email":
    'E-mail inválido',
};*/
/*const printError = (error) => {
  document.getElementById(
    "login-error"
  ).innerHTML = `${errorMessages[error]}`;
};*/



export default (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const errorCode = {
    "auth/user-not-found":
      'Usuário não cadastrado',
    "auth/wrong-password":
      'Senha incorreta',
    "auth/invalid-email":
      'E-mail inválido',
  };
  
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
            console.log(errorCode[error.code])
        
        
      })
  }
    return (
        <>
          <form>
              <Label className ='label'>Email</Label>
              <Input className='input' type="text" value={email} onChange={e => functionSetEmail(e.target.value)} />
              <Label className ='label'>Senha</Label>
              <Input className='input' type="password" value={password} onChange={e => setPassword(e.target.value)} />
              <BtnP className='btnLogCad btn btn-warning' type="submit" title='Login' onClick={login}>Login</BtnP>
          </form>
        </>
    )
}