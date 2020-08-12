import React from 'react';
import BtnP from './components/button/button';
import Sector from './components/ sector';
import logo from '../images/Logo.png';
import { firebaseConfig } from '../plugins/firebaseConfig';
import 'firebase/auth';
import 'firebase/firestore';

const signOut = (event) => {
  event.preventDefault();
  firebaseConfig
    .auth()
    .signOut()
    .then(() => {
      window.location.href = '/login';
    })
    .catch((error) => {
      console.log(error);
    });
};

const Hall = () => {
  return (
    <div className='container-fluid p-0'>
      <header className='d-flex black'>
        <div>
          <img className='imgLogo' src={logo} alt='logo' />
        </div>
        <div>
          <BtnP type='button' size='lg' class='btn btn-warning btn-lg align-self-center btnLogout'
            click={signOut}
            title='Sair'
          ></BtnP>
        </div>
      </header>
      <div className='justify-content-center color d-flex'>
        <Sector />
      </div>
    </div>
  );
};

export default Hall;
