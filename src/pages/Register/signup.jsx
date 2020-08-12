import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import BtnP from '../components/button/button';
import '../components/select/select.css';
import '../components/input/input.css';
import '../components/label/label.css';
import '../components/select/select.css';
import errorCode from '../login/Firebase_error';
import { firebaseConfig } from '../../plugins/firebaseConfig';
import 'firebase/auth';
import 'firebase/firestore';
import '../../App.css';
import '../login/Login.css';

export default () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [post, setPost] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [errorPass, setErrorPass] = useState('');

  const createLogin = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setErrorPass('Senhas não conferem. Tente novamente!');
    } else {
      firebaseConfig
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          const userCollection = firebaseConfig.firestore().collection('users');
          firebaseConfig.auth().onAuthStateChanged((user) => {
            userCollection.doc(user.uid).set({
              name,
              post,
            });
          });
        })
        .catch((error) => {
          if (errorCode[error.code]) {
            setErrorMsg(errorCode[error.code]);
          } else {
            setErrorMsg('Ocorreu um erro. Tente novamente!');
          }
        });
    }
  };

  return (
    <div>
      <Form className='form-auth'>
        <Form.Group>
          <Form.Label>Selecione um Cargo</Form.Label>
          <Form.Control as='select' name='office' className='select' value={post}
            onChange={(e) => setPost(e.target.value)}
          >
            <option className='option' value=''>
              Cargo
            </option>
            <option className='option' value='hall'>
              Garçom/Garçonete
            </option>
            <option className='option' value='kitchen'>
              Cozinheiro/Auxiliar de Cozinha
            </option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label className='label'>Nome</Form.Label>
          <Form.Control className='inputLogCad' type='text' name='name' value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className='label'>Email</Form.Label>
          <Form.Control className='inputLogCad' type='email' name='email' value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className='label'>Senha</Form.Label>
          <Form.Control className='inputLogCad' type='password' name='password' value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className='label'>Confirme sua senha</Form.Label>
          <Form.Control className='inputLogCad' type='password' name='confirm-password' value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>

        <BtnP variant='btn-warning btnLogCad' type='submit'
          onClick={createLogin}
        >
          Cadastrar
        </BtnP>
      </Form>
      <div className='msgError'>
        <p>
          {errorPass} {errorMsg}
        </p>
      </div>
    </div>
  );
};
