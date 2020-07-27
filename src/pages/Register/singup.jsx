import React/*,{useCallback}*/ from 'react'
import useSignUpForm from './CustomHooks'
import '../login/Login.css'
import BtnP from '../components/button';
import Input from '../components/input';
import Label from '../components/label';
//import Button from 'react-bootstrap/Button';


//import { app } from 'firebase';
//import {withRouter} from 'react-router'
//import  from ''
//import index from '../login/Index'


export default () => {
	const {inputs, handleInputChange, handleSubmit} = useSignUpForm();

/*const singup =() =>{
  console.log(`User Created!
  Name: ${inputs.name}
  Email: ${inputs.email}
  cargo: ${inputs.office}`);
  }*/
/*  const singup =({history}) =>{
    const handleSingUp = useCallback(async event =>{
      event.preventDefault();
      const {email, password} = event.target.elements;
      try{
        await app.auth()
        .createUserWithEmailAndPassword(email.value, password.value);
        history.push ('/');
      } catch(error){
        alert(error);
      }
      }, [history]);*/
  
  
	
	return (
		<div className='form-columm'>
		<form  className="form-auth" onSubmit={handleSubmit()}>
   
      <div>
      <select name='office'className='inputForm' onChange={handleInputChange} value={inputs.office}>
          <option value='Cargo'>Selecione um Cargo</option>
          <option value='hall'>Garçon/Garçonete</option>
          <option value='kitchen'>Cozinheiro/Auxiliar de Cozinha</option>
        </select>
      </div>
        <Label title='Nome' />
        <Input type="text" name="name" change={handleInputChange} value={inputs.name} required />
        <Label title='Email' />
        <Input type="email" name="email" change={handleInputChange} value={inputs.email} required />
        <Label title='Senha' />
        <Input type="password" name="password1" change={handleInputChange} value={inputs.password1}/>
        <Label title='Confirme sua senha' />
        <Input type="password" name="password2" change={handleInputChange} value={inputs.password2}/>
        <BtnP class='button' type="submit" title='Cadastrar'></BtnP>
    </form>
	</div>
  )

  }