import React, {useState} from 'react'
import BtnP from '../button/button'
import Menu from '../menu/menu'
import './sector.css'
import Pedidos from '../pedidos/pedidos'

const Sector =()=>{
const [hall, setHall] = useState('');
const [kitchen, setKitchen] = useState('');

const showMenu =()=>{
	setHall(true);
	setKitchen(false);
}
const showOrders=()=>{
	setHall(false);
	setKitchen(true);
}

	return (
		<div>
		<div className='bg-dark d-flex  justify-content-around size sector'>

		<BtnP type='button' className='btn btn-lg btn-light btnHall' onClick={function handleButton (){
			showMenu()}} >Meus pedidos</BtnP>
		<BtnP type='button'className='btn btn-lg btn-light btnHall' onClick={function handleButton (){
			showOrders()}} >Pedidos Enviados</BtnP>
		</div>
		
			{ hall && (
				<div >
					<Menu />
				</div>
				
			)}{ kitchen &&(
			<Pedidos />
			)
		}
		</div>
		)}

	export default Sector