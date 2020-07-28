import React from 'react'
import logo from '../images/Logo.png';
import BtnP from './components/button/button';
//import Input from './components/input';
import Sector from './components/ sector'
import {firebaseConfig} from '../plugins/firebaseConfig'
import "firebase/auth"
import "firebase/firestore"


const singOut=(event)=>{
	event.preventDefault()
	firebaseConfig
      .auth()
      .signOut()
      .then(() => {
		  console.log('deu certo')
        window.location.href = '/login';
      })
      .catch(() => {
		  console.log('vc ainda está logado')
	   });
  };





  
const Hall = ()=>{
	return(
<div className='container-fluid p-0'>
<header className='d-flex black'> 
<div>  
	<img className="imgLogo " src={logo} alt="logo"/>
</div>
  <div>
 <BtnP type='button' click={singOut} size="lg" class='btn btn-warning btn-lg align-self-center btnLogout'title='Sair'></BtnP>  
  </div>
	</header>
	<div className=" justify-content-center color d-flex">
	<Sector />
	</div>
		</div>
		
	)
}
export default Hall
