import React from 'react';
import { Card } from 'react-bootstrap';
import { GrLogout } from 'react-icons/gr';
import logo from '../../../images/Logo.png';
import { firebaseConfig } from '../../../plugins/firebaseConfig';
import 'firebase/auth';
import 'firebase/firestore';
import './header.css';

const singOut = (event) => {
  event.preventDefault();
  firebaseConfig
    .auth()
    .signOut()
    .then(() => {
      window.location.href = '/';
    })
    .catch((error) => {
      console.log(error);
    });
};

function Header() {
  return (
    <Card.Header className='header black'>
      <div>
        <img className='imgLogo' src={logo} alt='logo' />
      </div>
      <div>
        <GrLogout className='door' onClick={singOut} />
      </div>
    </Card.Header>
  );
}

export default Header;
