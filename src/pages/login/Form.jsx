import React, { useState } from 'react';
import { firebaseConfig } from '../../plugins/firebaseConfig';
import "firebase/auth";
import BtnP from '../components/button/button';
import errorCode from './Firabase_error';
import '../../App.css';
import { Form } from 'react-bootstrap';
import '../components/input/input.css'
import '../components/label/label.css'

export default (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  let [errorMsg, setErrorMsg] = useState('')
  const [post, setPost] = useState('')

  const functionSetEmail = (element) => {
    setEmail(element)
    props.saveEmail(element)
  }

  const login = (event) => {
    event.preventDefault()
    firebaseConfig.auth().signInWithEmailAndPassword(email, password)
      .then((response) => {
        if (post === 'hall'){
          window.location.href = '/hall';
          console.log('com o hall')
        }else if(post === 'kitchen'){
          window.location.href = '/kitchen';
          console.log('vc se logou na cozinha')
        } else {
          console.log('vc se logou sem rota.')
        }
      })
      .catch((error) => {
        if (errorCode[error.code]) {
          setErrorMsg(errorCode[error.code])
        } else {
          (setErrorMsg('Ocorreu um erro. Tente novamente!'))
        }
      })
  }
  return (
    <>
      <Form>
        <Form.Group >
          <Form.Label className='label'>Email </Form.Label>
          <Form.Control className='input' type="text" value={email} onChange={e => functionSetEmail(e.target.value)} />

        </Form.Group>

        <Form.Group >
          <Form.Label className='label'>Password</Form.Label>
          <Form.Control className='input' type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </Form.Group>

        <Form.Group >
    <Form.Label>Selecione um Cargo</Form.Label>
    <Form.Control as="select" name='office'className='select' value={post} onChange={e => setPost(e.target.value)}>
    <option className='option'value=''>Cargo</option>
        <option className='option'value='hall'>Garçom/Garçonete</option>
        <option className='option' value='kitchen'>Cozinheiro/Auxiliar de Cozinha</option>
    </Form.Control>
    </Form.Group>

        <BtnP variant="warning btnLogCad" type="submit" onClick={login}>
          Login
  </BtnP>
      </Form>
      <div className='msgError'>
        <p>{errorMsg}</p>
      </div>
    </>
  )
}