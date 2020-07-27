import React, {useState} from 'react'
import BtnP from './button'
import Menu from './menu'




const Sector =()=>{
const [open, setOpen] = useState(true);

	const onClick=()=>{
    console.log('foi')
		setOpen(!open);
		
	};
	return (
	<div>
    <div className='bg-warning d-flex flex-direction-row justify-content-between size'>
<BtnP type='button' class='btn btn-lg btn-light btnHall' click={onClick} title='Meus Pedidos'></BtnP>
<BtnP type='button'class='btn btn-lg btn-light btnHall' click={onClick} title='Pedidos Enviados'></BtnP>
{/* <Button className='btn btn-lg btn-light btnHall' onClick={onClick}>Meus Pedidos</Button>
  <button className='btn btn-lg btn-light btnHall' onClick={onClick}>Pedidos Enviados</button*/}>

	
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
<button>XXXXXXXXXXXXXXXX</button>
      </div>
      <div className='bg-warning'>
          <h2>Pedidos Prontos</h2>
      </div>
      <div>
<button>XXXXXXXXXXXXXXXX</button>
      </div>

      </div>      
    )

    }
	</div>
	)}
export default Sector