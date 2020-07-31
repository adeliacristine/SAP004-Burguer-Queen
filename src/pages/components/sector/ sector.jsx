import React, {useState} from 'react'
import BtnP from '../button/button'
import Menu from '../menu/menu'
import './sector.css'
import Pedidos from '../pedidos/pedidos'


const Sector =()=>{
const [hall, setHall] = useState('');
const [kitchen, setKitchen] = useState('');

	return (
	<div>
    <div className='bg-dark d-flex  justify-content-around size sector'>
   
<BtnP type='button' className='btn btn-lg btn-light btnHall' onClick={function handleButton (){
setHall(!hall) 
}} >Meus pedidos</BtnP>
<BtnP type='button'className='btn btn-lg btn-light btnHall' onClick={function handleButton (){
setKitchen(!kitchen)
}} >Pedidos Enviados</BtnP>
		</div>
    
		{ (!kitchen && hall)|| !hall && (
<div >
<Menu />
</div>
			
		)}{(!hall && kitchen)|| !kitchen &&(
            
    <Pedidos />

    )

    }
	</div>
	)}
export default Sector