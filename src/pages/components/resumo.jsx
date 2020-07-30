import React from 'react'
import BtnP from './button/button'
import Input from '../components/input/input'
import Label from '../components/label/label'

const Resumo = () => {
  return (
    <div className='border bg-warning'>
      <div >
        <h1 className=' '>Resumo</h1>
        <Label>Nome do Cliente</Label>
        <Input type="text" className="formResumo" required></Input>
        <Label >Mesa</Label>
        <Input type="text" className="formResumo" required></Input>
      </div>

      <div class='d-flex flex-row justify-content-around'>
        <h2 className=''>Item</h2>
        <h2 className=''>Valor</h2>
      </div>


      <div class='d-flex flex-row'>
        <p>nome do item</p>
        <p className=''>Valor do item</p>
      </div>

      <div className='d-flex flex-direction-column'>

        <div className='d-flex flex-direction-row '>
          <BtnP type='button'  >-1</BtnP>
          <p className='' id='number' >0</p>
          <BtnP type='button'  >+1</BtnP>
        </div>

        <div>
          <BtnP type='button' >Del</BtnP></div>
      </div>

      <div className='d-flex'>
<p>Valor Total</p>
<p>Valor em real</p>
</div>
<div>
<BtnP type='submit' >Confirmar</BtnP>
<BtnP type='submit' >Cancelar</BtnP>

</div>

      </div>
    
  )
}
export default Resumo