import React from 'react'
import BtnP from '../button/button'
import './pedidos.css'

const Pedidos = () => {
  return (
    <div className=' pedidos'>
      <h2>Próximo pedido à ser preparado</h2>
      <div className='bg-ligth d-flex '>
        <BtnP>Pedido pronto</BtnP> 
      </div>

      <h2>Pedidos Prontos</h2>
      <div className='bg-ligth d-flex '>

      </div>


    </div>
  )
}
export default Pedidos