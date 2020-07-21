import React from 'react'
import {Form, Button, Icon,Input,Label } from 'semantic-ui-react'
import  './style.css'
import {Switch, Link, Route } from 'react-router-dom';
import Login from '../Login'

const RegisterForm =()=>{
  return(
    <div className='RegisterForm'>
      
  <Form >
  <h2>Faça seu cadastro!</h2>
  <select style={{background: " #ffffff3f",color:'orange'}} >
    <option value='Cargo'>Selecione um Cargo</option>
    <option value='hall'>Garçon/Garçonete</option>
    <option value='kitchen'>Cozinheiro/Auxiliar de Cozinha</option>
  </select>
 {/* <Label className='labelColor'>Name</Label> {/* css não deu certo */}*/}
  <label className='labelColor'>Name</label> {/*css deu certo  */}

  <Form.Field >
   {/* <Input className='inputForm'></Input>*/} {/* css não deu certo */}
   {/* <input className='inputForm'></input> */} {/* css não deu certo */}
    <input style={{background: " #ffffff3f", color:'white'}} className= 'inputForm'></input> {/* só da certo com letra minuscula */}
  {/*  style={{border-bottom-color:"orange"}} não consigo colocar a segunda propriedade */}
  </Form.Field>

  <label className='labelColor'>E-mail</label>
  <Form.Field>
    <input type='email'style={{background: " #ffffff3f", color:'white'}} />
  </Form.Field>

  <label className='labelColor'>Senha</label>
  <Form.Field className='field'>
    <input type='password' style={{background: " #ffffff3f", color:'white'}}  /> 
    <Button style={{background: " #ffffff3f"}}><Icon name='eye'className='icone' /></Button>
  </Form.Field>

  <label className='labelColor'>Confirme sua Senha</label>
  <li className='field'>
    <input type='password' style={{background: " #ffffff3f", color:'white'}}/> 
    <Button style={{background: " #ffffff3f"}}><Icon name='eye' className='icone' /></Button>
  </li>
  <Button type='submit' color=' orange'>Cadastrar</Button>
</Form>
</div>
  )
}

const Register = () => {
  return (
    <div className='RegisterImg' >
    <Link to="login" ><button>Login</button></Link>
    <Link to="register" ><button>Registrar</button></Link>
    <Switch>
      <Route path='/login'><Login /></Route> 
      <Route path='/register'>
        <RegisterForm />
        </Route> 
    </Switch>
    </div>



  )
}
export default Register