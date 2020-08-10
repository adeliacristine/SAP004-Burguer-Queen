import React, {useState} from 'react'
import BtnP from '../button/button'
import './sector.css'
import Cooking from '../Preparando/preparando'
//import Pedidos from '../pedidos/pedidos'
import Ready from '../pedidosProntos/ready'

const Sector =()=>{
const [kitchen, setKitchen] = useState('');
const [historic, setHistoric] = useState('');


const showMenu =()=>{
	setKitchen(true);
	setHistoric(false);

}
const showOrders=()=>{
	setKitchen(false);
	setHistoric(true);

}


	return (
		<div>
		<div className='bg-dark d-flex  justify-content-around size sector'>

		<BtnP type='button' className='btn btn-lg btn-light btnHall' onClick={function handleButton (){
			showMenu()}} >Pedidos Recebidos</BtnP>
		<BtnP type='button'className='btn btn-lg btn-light btnHall' onClick={function handleButton (){
			showOrders()}} >Histórico de Pedidos</BtnP>
		</div>
		
			{ kitchen && (
				<div >
					<Cooking />
				</div>
				
			)}{ historic &&(
			<Ready />
			)
		}
		</div>
		)}

	export default Sector