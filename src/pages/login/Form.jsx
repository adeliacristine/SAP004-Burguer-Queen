import React, { useState } from 'react';
import { firebaseAuth } from '../../plugins/firebaseConfig'

export default () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const login = (event) => {
    event.preventDefault()
    firebaseAuth.signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response, "Usuário logado")
      })
      .catch((error) => {
        console.log(error)
      })
  }
    
    return (
        <>
          <form className="form-auth">
              <label>Email</label>
              <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
              <label>Senha</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
              <button type="submit" onClick={login}>Login</button>
          </form>
        </>
    )
}