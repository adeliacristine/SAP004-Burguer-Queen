import React, { useState } from 'react';
import { firebaseConfig } from '../../plugins/firebaseConfig'
import "firebase/auth"
import Input from '../components/input';
import BtnP from '../components/button';
import Label from '../components/label';

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

{/*<form className="form-auth" onSubmit={handleSubmit(send)}>
                <Label title='Email' />
                <Input change={handleChange} type="text"  />
                <Label title='Senha' />
                <Input change={handleChange} type="password" />
                <BtnP class='button' type="submit" title='Login'>{loading ? "Enviando..." : "Login"}</BtnP>
              </form>*/}

          <form className="form-auth">
              <Label title='Email'></Label>
              <Input type="text" value={email} onChange={e => functionSetEmail(e.target.value)} />
              <Label tille='Senha'></Label>
              <Input type="password" value={password} onChange={e => setPassword(e.target.value)} />
              <BtnP type="submit" title='Login' click={login}></BtnP>
          </form>
        </>
    )
}