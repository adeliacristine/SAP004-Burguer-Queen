import React from 'react'
import BtnP from './button/button'
//import Input from './input'
const Resumo = () => {
  return (
    <div>
      <div className='pdd'>
        <h1 className='text-light '>Resumo</h1>
        <input type="text" class="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" required></input>
        <input type="text" class="form-control" placeholder="Mesa" aria-label="Mesa" aria-describedby="basic-addon1" required></input>
      </div>

      <div class='d-flex flex-row justify-content-around'>
				<h2 className='text-light'>Item</h2>
				<h2 className='text-light'>Valor</h2>
			</div>
      
<div >
<p className='text-light' id='item'>Nome do item</p>
<div className='d-flex flex-direction-row '>
<BtnP type='button' title='-1' ></BtnP>
      <p className='text-light' id='number' >0</p>
      <BtnP type='button' title='+1' ></BtnP>
</div>
     

</div>
     
    </div>
  )
}
export default Resumo