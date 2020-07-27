import React from 'react';
import './Login.css';
import Form from './Form';
import Input from '../components/input';
import BtnP from '../components/button';
import Label from '../components/label';


export default () => {
  const [{ values, loading }, handleChange, handleSubmit] = Form()

  const send = () => {
    console.log(values)
  }

    return (
      <>
      <div className='form-columm'>
      <form className="form-auth" onSubmit={handleSubmit(send)}>
                <Label title='Email' />
                <Input change={handleChange} type="text"  />
                <Label title='Senha' />
                <Input change={handleChange} type="password" />
                <BtnP class='button' type="submit" title='Login'>{loading ? "Enviando..." : "Login"}</BtnP>
              </form>
              <div>
                <h4 className="forgot-password-auth">Esqueceu a senha?</h4>
              </div>

      </div>
            
      </>
  )
}