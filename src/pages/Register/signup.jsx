import React/*,{useCallback}*/ from 'react'
import { useState } from 'react'
import { firebaseConfig } from '../../plugins/firebaseConfig'
import "firebase/auth"
import "firebase/firestore"

import '../login/Login.css'

export default () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [post, setPost] = useState('')

    const createLogin = (event) => {
      event.preventDefault()
      if (password !== confirmPassword) {
        alert('Senhas não conferem')
      } else {
        firebaseConfig.auth().createUserWithEmailAndPassword(email, password)
        .then((response) => {
          const userCollection = firebaseConfig.firestore().collection('users')
            firebaseConfig.auth().onAuthStateChanged((user) =>{
              userCollection 
                .doc(user.uid)
                .set({
                  name,
                  post,
                })
            })
              alert('Criado', response)
        })
        .catch((error) => {
          console.log(error)
        })
      }
    }
    
    return (
      <div className='form-columm'>
      <form  className="form-auth">
        <div>
        <select name='office'className='inputForm' value={post} onChange={e => setPost(e.target.value)}>
            <option value='Cargo'>Selecione um Cargo</option>
            <option value='hall'>Garçom/Garçonete</option>
            <option value='kitchen'>Cozinheiro/Auxiliar de Cozinha</option>
          </select>
        </div>
          <label>Nome</label>
          <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} required />
          <label>Email</label>
          <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required />
          <label>Senha</label>
          <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
          <label>Confirme sua senha</label>
          <input type="password" name="confirm-password" value={confirmPassword} 
            onChange={e => setConfirmPassword(e.target.value)} />
          <button className='button' type="submit" onClick={createLogin}>Cadastrar</button>
      </form>
    </div>
    )
  }