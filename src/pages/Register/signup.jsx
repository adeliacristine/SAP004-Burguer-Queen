import React/*,{useCallback}*/ from 'react'
import { useState } from 'react'
import { firebaseConfig } from '../../plugins/firebaseConfig'
import "firebase/auth"
import "firebase/firestore"
/*import BtnP from '../components/button/button'
import Label from '../components/label/label'
import Input from '../components/input/input'*/
import '../components/select/select.css'

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
              /*alert('Criado', response)*/
              console.log('deu certo',response)
        })
        .catch((error) => {
          console.log(error)
        })
      }
    }
    
    return (
      <div >
      <form  className="form-auth">
        <div>
        <select name='office'className='select' value={post} onChange={e => setPost(e.target.value)}>
            <option value='Cargo'>Selecione um Cargo</option>
            <option value='hall'>Garçom/Garçonete</option>
            <option value='kitchen'>Cozinheiro/Auxiliar de Cozinha</option>
          </select>
        </div>
        <label className='label' title='Nome'>Nome</label>
          <input className='input' type="text" name="name" value={name} onChange={e => setName(e.target.value)} required />
          <label className='label' title='Email'>Email</label>
          <input className='input' type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required />
          <label className='label' title='Senha'>Senha</label>
          <input className='input' type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
          <label className='label' title='Confirme sua senha' >senha</label>
          <input className='input' type="password" name="confirm-password" value={confirmPassword} 
            onChange={e => setConfirmPassword(e.target.value)} />
          <button className='btnLogCad btn-warning' type="submit" title='Cadastrar' onClick={createLogin}>cadastrar</button>
      </form>
    </div>
    )
  }