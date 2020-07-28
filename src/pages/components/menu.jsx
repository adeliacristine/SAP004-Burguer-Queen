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
        <BtnP type='button' class='btn-warning btnMenu btn btn-lg' click={onClick} title='Breackfast'></BtnP>
        <BtnP type='button' class='btnMenu btn btn-warning btn-lg' click={onClick} title='All Day'></BtnP>
      </div>

      {open && (
        <div className='d-flex bg-ligth justify-content-start'>
          <div>
            <BtnP type='button' class='btn btn-lg btn-light btnFood' title='Café americano R$ 5,00'></BtnP>
            <BtnP type='button' class='btn btn-lg btn-light btnFood' title='Café com leite R$7,00'></BtnP>
            <BtnP type='button' class='btn btn-lg btn-light btnFood' title='Misto Quente R$10,00'></BtnP>
            <BtnP type='button' class='btn btn-lg btn-light btnFood' title='Suco de fruta natural R$7,00'></BtnP>
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
              <BtnP type='button' class='btn btn-lg btn-light btnFood' title='Hambúguer simples R$10,00'></BtnP>
              <BtnP type='button' class='btn btn-lg btn-light btnFood' title='Hambúrguer duplo  R$15,00'></BtnP>
            </div>
            <h2 className=' d-flex text-align-center'>Acompanhamentos</h2>
            <div classname='d-flex flex-row'>
              <BtnP type='button' class='btn btn-lg btn-light btnFood' title='Batata frita R$5,00'></BtnP>
              <BtnP type='button' class='btn btn-lg btn-light btnFood' title='Anéis de cebola R$5,00'></BtnP>
            </div>
            <h2 className=' d-flex text-align-center'>Bebidas</h2>
            <div className='d-flex flex-column justify-content-start'>
              <div>
              <BtnP type='button' class='btn btn-lg btn-light btnFood' title='Água 500ml R$5,00'></BtnP>
              <BtnP type='button' class='btn btn-lg btn-light btnFood' title='Água 750ml R$7,00'></BtnP>
              </div>
              <div>
              <BtnP type='button' class='btn btn-lg btn-light btnFood' title='Refrigerante 500ml R$7,00'></BtnP>
              <BtnP type='button' class='btn btn-lg btn-light btnFood' title='Refrigerante 750ml R$10,00'></BtnP>
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