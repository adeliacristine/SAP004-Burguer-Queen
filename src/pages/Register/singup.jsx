import React from 'react'
import useSignUpForm from './CustomHooks'
import '../login/Login.css'


export default () => {
	const {inputs, handleInputChange, handleSubmit} = useSignUpForm();

const singup =() =>{
		console.log(inputs)
	}
	
	return (
		<div className='form-columm'>
		<form  className="form-auth" onSubmit={handleSubmit(singup)}>
      <div>
      <select className='inputForm'>
          <option value='Cargo'>Selecione um Cargo</option>
          <option value='hall'>Garçon/Garçonete</option>
          <option value='kitchen'>Cozinheiro/Auxiliar de Cozinha</option>
        </select>
      </div>
        <label>Nome</label>
        <input type="text" name="name" onChange={handleInputChange} value={inputs.name} required />
        <label>Email</label>
        <input type="email" name="email" onChange={handleInputChange} value={inputs.email} required />
        <label>Senha</label>
        <input type="password" name="password1" onChange={handleInputChange} value={inputs.password1}/>
        <label>Conforme sua senha</label>
        <input type="password" name="password2" onChange={handleInputChange} value={inputs.password2}/>
        <button className='button' type="submit">Cadastrar</button>
    </form>
	</div>
	)
}
