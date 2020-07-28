import React, { useState } from 'react'
import BtnP from './button/button'
import Resumo from './resumo'

const Menu = () => {
  const [open, setOpen] = useState(true);

  const onClick = () => {
    setOpen(!open);

  };
  return (
    <div >
      <div className='d-flex justify-content-start black'>
        <BtnP type='button' className='btn-warning btnMenu btn btn-lg' onClick={onClick} >Breackfas</BtnP>
        <BtnP type='button' className='btnMenu btn btn-warning btn-lg' onClick={onClick} >All Day</BtnP>
      </div>

      {open && (
        <div className='d-flex bg-ligth justify-content-start'>
          <div>
            <BtnP type='button' className='btn btn-lg btn-light btnFood' >Café americano R$ 5,00</BtnP>
            <BtnP type='button' className='btn btn-lg btn-light btnFood' >Café com leite R$7,00</BtnP>
            <BtnP type='button' className='btn btn-lg btn-light btnFood' >Misto Quente R$10,00</BtnP>
            <BtnP type='button' className='btn btn-lg btn-light btnFood' >Suco de fruta natural R$7,00</BtnP>
          </div>
          <div className='border bg-warning'>
            <Resumo />
          
          </div>
        </div>

      )}{!open && (

        <div className='d-flex bg-ligth justify-content-start '>
          <div>
            <h2 className='d-flex text-align-center'>Hambúgueres</h2>
            <div className='d-flex'>
              <BtnP type='button' className='btn btn-lg btn-light btnFood' >Hambúguer simples R$10,00</BtnP>
              <BtnP type='button' className='btn btn-lg btn-light btnFood' >Hambúrguer duplo  R$15,00</BtnP>
            </div>
            <h2 className=' d-flex text-align-center'>Acompanhamentos</h2>
            <div classname='d-flex flex-row'>
              <BtnP type='button' className='btn btn-lg btn-light btnFood' >Batata frita R$5,00</BtnP>
              <BtnP type='button' className='btn btn-lg btn-light btnFood' >Anéis de cebola R$5,00</BtnP>
            </div>
            <h2 className=' d-flex text-align-center'>Bebidas</h2>
            <div className='d-flex flex-column justify-content-start'>
              <div>
              <BtnP type='button' className='btn btn-lg btn-light btnFood' >Água 500ml R$5,00</BtnP>
              <BtnP type='button' className='btn btn-lg btn-light btnFood' >Água 750ml R$7,00</BtnP>
              </div>
              <div>
              <BtnP type='button' className='btn btn-lg btn-light btnFood' >Refrigerante 500ml R$7,00</BtnP>
              <BtnP type='button' className='btn btn-lg btn-light btnFood' >Refrigerante 750ml R$10,00</BtnP>
           </div>
            </div>
          </div>
          <div className='border bg-ligth'>
            <Resumo />
          </div>

        </div>
      )}
    </div>
  )
}
export default Menu