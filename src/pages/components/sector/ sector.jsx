import React, {useState} from 'react'
import BtnP from '../button/button'
import Menu from '../menu/menu'
import './sector.css'
import Pedidos from '../pedidos/pedidos'


const Sector =()=>{
const [hall, setHall] = useState('');
const [kitchen, setKitchen] = useState('');

const teste =()=>{
	setHall(!hall);
	setKitchen(kitchen);
}
const teste1=()=>{
	setHall(hall);
	setKitchen(!kitchen);
}

	return (
	<div>
    <div className='bg-dark d-flex  justify-content-around size sector'>
   
<BtnP type='button' className='btn btn-lg btn-light btnHall' onClick={function handleButton (){
teste()
}} >Meus pedidos</BtnP>
<BtnP type='button'className='btn btn-lg btn-light btnHall' onClick={function handleButton (){
teste1()
}} >Pedidos Enviados</BtnP>
		</div>
    
		{ ! hall && (
<div >
<Menu />
</div>
			
		)}{ !kitchen &&(
            
    <Pedidos />

    )

    }
	</div>
	)}
export default Sector