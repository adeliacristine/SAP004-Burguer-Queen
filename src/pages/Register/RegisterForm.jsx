import React from 'react'
import '../login/Login.css'
import ViewPassword from './RegisterFunction'
import olho  from '../../images/olho.png'

const RegisterForm = () => {
  return (
    <div className='form-columm'>
      <form className="form-auth">
        <select className='inputForm'>
          <option value='Cargo'>Selecione um Cargo</option>
          <option value='hall'>Garçom/Garçonete</option>
          <option value='kitchen'>Cozinheiro/Auxiliar de Cozinha</option>
        </select>
        <label className='labelColor'>Name</label> 
        <input className='inputForm'></input>
        <label className='labelColor'>E-mail</label>
        <input type='email' className='inputForm'/>
        <label className='labelColor'>Senha</label>

        <li>
        <input type='password' id='password' className='inputForm' /> 
        <button className='buttonEye' onClick={() => ViewPassword()} ><img className="icone"  src={olho} alt="olho"/></button>

        </li>
        
        
        <label className='labelColor'>Confirme sua Senha</label>
        <li>
        <input type='password' id='password1' className='inputForm' />
        <button className='buttonEye' onClick={() => ViewPassword()}><img className="icone"  src={olho} alt="olho"/></button>
        </li>
        <button className='button'type='submit'  >Cadastrar</button>
      </form>
    </div>
  )
}
export default RegisterForm