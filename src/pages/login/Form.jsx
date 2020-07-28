import React, { useState } from 'react';
import { firebaseConfig } from '../../plugins/firebaseConfig'
import "firebase/auth";
import Input from '../components/input/input';
import BtnP from '../components/button/button';
import Label from '../components/label/label';


export default (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
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
        console.log(error)
      })
  }
    return (
        <>
          <form>
              <Label class ='label'title='Email'></Label>
              <Input class='input' type="text" value={email} onChange={e => functionSetEmail(e.target.value)} />
              <Label class ='label' title='Senha'></Label>
              <Input class='input' type="password" value={password} onChange={e => setPassword(e.target.value)} />
              <BtnP class='btnLogCad btn btn-warning' type="submit" title='Login' click={login}></BtnP>
          </form>
        </>
    )
}