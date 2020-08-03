import React, { useState } from 'react';
import { firebaseConfig } from '../../plugins/firebaseConfig'
import "firebase/auth";
import BtnP from '../components/button/button';
import errorCode from './Firabase_error';
import '../../App.css';
import { Form } from 'react-bootstrap';


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