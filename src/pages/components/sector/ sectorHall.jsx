import React, {useState} from 'react'
import BtnP from '../button/button'
import Menu from '../menu/menu'
import './sector.css'
import Pedidos from '../pedidos/pedidos'
import Ready from '../pedidosProntos/ready'

const Sector =()=>{
const [hall, setHall] = useState('');
const [ready, setready] = useState('');
const [delivery, setDelivery] =useState('');

const showMenu =()=>{
	setHall(true);
	setready(false);
	setDelivery(false);
}
const showOrders=()=>{
	setHall(false);
	setready(true);
	setDelivery(false);
}
const showRequest=()=>{
	setHall(false);
	setready(false);
	setDelivery(true);
}

	return (
		<div>
		<div className='bg-dark d-flex  justify-content-around size sector'>

		<BtnP type='button' className='btn btn-lg btn-light btnHall' onClick={function handleButton (){
			showMenu()}} >Meus pedidos</BtnP>
		<BtnP type='button'className='btn btn-lg btn-light btnHall' onClick={function handleButton (){
			showOrders()}} >Pedidos Prontos</BtnP>
		<BtnP type='button'className='btn btn-lg btn-light btnHall' onClick={function handleButton (){
			showRequest()}} >Pedidos Entregues</BtnP>
		</div>
		
			{ hall && (
				<div >
					<Menu />
				</div>
				
			)}{ ready &&(
			<Ready />
			)
		}{ delivery &&(
			<Pedidos />
			)}
		</div>
		)}

	export default Sector