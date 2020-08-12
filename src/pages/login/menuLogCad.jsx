import React, { useState } from 'react';
import SignUp from '../Register/signup';
import Login from '../login/Login';
import logo from '../../images/Logo.png';
import BtnP from '../components/button/button';
import '../components/input/input.css';
import '../components/label/label.css';
import '../../pages/components/link/link.css';

const MenuLogCad = () => {
  const [menu, setMenu] = useState(true);
  const [cad, setCad] = useState('');

  const login = () => {
    setMenu(true);
    setCad(false);
	};
	
  const Register = () => {
    setMenu(false);
    setCad(true);
	};
	
  return (
    <>
      <div className='background'>
        <div className='container'>
          <div>
            <img className='logo' src={logo} alt='logo' />
          </div>
          <div className='box-auth'>
            <div className='header-box-auth'>
              <div>
                <BtnP className='btnLink' type='button'
                  onClick={function handleClick() {
                    login();
                  }}
                >
                  Login
                </BtnP>
                <BtnP className='btnLink' type='button'
                  onClick={function handleClick() {
                    Register();
                  }}
                >
                  Registrar
                </BtnP>

                {menu && <Login />}
                {cad && <SignUp />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuLogCad;
