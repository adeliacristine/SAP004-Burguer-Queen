import React from 'react';
import {Card} from 'react-bootstrap';
import logo from '../../../images/Logo.png';
import {firebaseConfig} from '../../../plugins/firebaseConfig'
import "firebase/auth"
import "firebase/firestore"
import './header.css'
import {GrLogout} from 'react-icons/gr'

const singOut=(event)=>{
	event.preventDefault()
	firebaseConfig
      .auth()
      .signOut()
      .then(() => {
		  console.log('deu certo')
        window.location.href = '/';
      })
      .catch(() => {
		  console.log('vc ainda está logado')
	   });
  };


function Header() {
  return (
  <Card.Header className='header black'>
	  <div>  
	<img className="imgLogo " src={logo} alt="logo"/>
</div>
  <div>
<GrLogout className='door'  onClick={singOut}/>  
  </div>
	  
  </Card.Header> 
  );
}

export default Header;
