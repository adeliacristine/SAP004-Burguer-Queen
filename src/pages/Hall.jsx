import React from 'react'
import logo from '../images/Logo.png';
import BtnP from './components/button/button';
//import Input from './components/input';
import Sector from './components/ sector'


const Hall = ()=>{
	return(
<div className='container-fluid p-0'>{/* container-fluid p-0 */}
<header className='d-flex black'> 
<div>  
	<img className="imgLogo " src={logo} alt="logo"/>
</div>
  <div>
 <BtnP type='button' size="lg" class='btn btn-warning btn-lg align-self-center btnLogout'title='Sair'></BtnP>  
  </div>
	</header>
	<div className=" justify-content-center color d-flex">
	<Sector />
	</div>
	{/*	
			<h1>Total</h1>
			<h1>Valor</h1>
			<div class="d-flex justify-content-center">
			<Button type='button'class='btn btn-lg btn-success ' title='Cancelar'></Button>
			<Button type='button'class='btn btn-lg btn-danger' title='Confirmar'></Button>
			*/}
		</div>
		
	)
}
export default Hall
