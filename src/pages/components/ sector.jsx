import React, {useState} from 'react'
import BtnP from './button/button'
import Menu from './menu'




const Sector =()=>{
const [open, setOpen] = useState(true);

	const onClick=()=>{
    console.log('foi')
		setOpen(!open);
		
	};
	return (
	<div>
    <div className='bg-warning d-flex  justify-content-around size'>
<BtnP type='button' className='btn btn-lg btn-light btnHall' onClick={onClick} >Meus Pedidos</BtnP>
<BtnP type='button'className='btn btn-lg btn-light btnHall' onClick={onClick} >Pedidos Enviados</BtnP>
	
	</div>

		{open &&(
<div className='d-flex'>
<Menu />
</div>
			
		)}{!open &&(
      <div className='bg-warning d-flex justify-content-center conteiner-fluid'>
        <div className='bg-warning'>
          <h2>Pedidos enviados para aCozinha.</h2>
      </div>
      <div>
<BtnP>XXXXXXXXXXXXXXXX</BtnP>
      </div>
      <div className='bg-warning'>
          <h2>Pedidos Prontos</h2>
      </div>
      <div>
<BtnP>XXXXXXXXXXXXXXXX</BtnP>
      </div>

      </div>      
    )

    }
	</div>
	)}
export default Sector