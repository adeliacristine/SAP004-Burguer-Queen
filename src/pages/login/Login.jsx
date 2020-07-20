import React from 'react';

import './Login.css';
import logo from '../../images/Logo.png'
import Form from './Form'

export default () => {
  const [{ values, loading }, handleChange, handleSubmit] = Form()

  const send = () => {
    console.log(values)
  }

    return (
      <>
        <div className="background">
          <img className="logo" src={logo} alt="logo"/>
          <div className="box-auth">
            <div className="header-box-auth"> 
              <h3>Login</h3>
              <h3>Registrar</h3>
            </div>
            <div>
              <form className="form-auth" onSubmit={handleSubmit(send)}>
                <label>Email</label>
                <input onChange={handleChange} type="text" />
                <label>Senha</label>
                <input onChange={handleChange} type="password" />
                <button type="submit">{loading ? "Enviando..." : "Enviar"}</button>
              </form>
            </div>
          </div>
        </div>
      </>
  )
}