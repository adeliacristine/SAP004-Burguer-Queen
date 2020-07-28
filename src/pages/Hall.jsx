import React from 'react'
import logo from '../images/Logo.png';
import BtnP from './components/button/button';
//import Input from './components/input';
import Sector from './components/ sector'


const Hall = ()=>{
	return(
<div className=''>{/* container-fluid p-0 */}
<header className='black d-flex justify-content-between'> 
<div>  
	<img className="logo " src={logo} alt="logo"/>
</div>
  <div>
 <BtnP type='button' class='btn btn-warning btn-lg align-self-center btnLogout'title='Sair'></BtnP>  

  </div>
	</header>
	
	<div className=" justify-content-center color d-flex">
	<Sector />
	</div>
	{/*	<div class="border">
			<h2>Pedidos</h2>
			<Input text='Nome'></Input>
			<Input text='Mesa'></Input>
			<div class='d-flex flex-row justify-content-around'>
				<h2>Item</h2>
				<h2>Valor</h2>
			</div>
			<div class='d-flex flex-row'>	
			<Button type='button'class='btnHall btn btn-lg justify-content-around' title='-1'></Button>
			<p>0</p>
			<Button type='button'class='btnHall btn btn-lg ' title='+1'></Button>
			<h2>R$ valor</h2> 	<Button type='button'class='btnHall btn btn-lg ' title='Deletar'></Button>
			</div>
			<h2>para o item</h2>
		<div class='d-flex flex-row'>	
			<Button type='button'class='btnHall btn btn-lg justify-content-around' title='-'></Button>
			<p>0</p>
			<Button type='button'class='btnHall btn btn-lg ' title='+'></Button>
			<h2>R$ valor</h2>
			</div>
			<h2>para o item</h2>
		<div class='d-flex flex-row'>	
			<Button type='button'class='btnHall btn btn-lg justify-content-around' title='-'></Button>
			<p>0</p>
			<Button type='button'class='btnHall btn btn-lg ' title='+'></Button>
			<h2>R$ valor</h2>
			</div>
			<h2>para o item</h2>
			<h1>Total</h1>
			<h1>Valor</h1>
			<div class="d-flex justify-content-center">
			<Button type='button'class='btn btn-lg btn-success ' title='Cancelar'></Button>
			<Button type='button'class='btn btn-lg btn-danger' title='Confirmar'></Button>
			</div>
</div>*/}
		</div>
		
	)
}
export default Hall
