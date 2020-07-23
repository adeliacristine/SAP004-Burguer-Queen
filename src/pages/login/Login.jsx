import React from 'react';
import './Login.css';
import Form from './Form'


export default () => {
  const [{ values, loading }, handleChange, handleSubmit] = Form()

  const send = () => {
    console.log(values)
  }

    return (
      <>
      <div className='form-columm'>
      <form className="form-auth" onSubmit={handleSubmit(send)}>
                <label>Email</label>
                <input onChange={handleChange} type="text" />
                <label>Senha</label>
                <input onChange={handleChange} type="password" />
                <button className='button' type="submit">{loading ? "Enviando..." : "Login"}</button>
              </form>
              <div>
                <h4 className="forgot-password-auth">Esqueceu a senha?</h4>
              </div>

      </div>
            
      </>
  )
}