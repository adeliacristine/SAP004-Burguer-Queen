import React from 'react';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import BtnP from '../components/button/button'
import './kitchen.css'

const Kitchen = () => {


  return (
    <>
    <Header />
    <div className=''>
      <h2 className='sector'>Próximo pedido à ser preparado</h2>
      <div className='bg-ligth d-flex '>
        <BtnP>Pedido pronto</BtnP>
      </div>

      <h2 className='sector'>Pedidos Prontos</h2>
      <div className='bg-ligth d-flex '>

      </div>


    </div>
    <Footer />
    </>
  )
}

export default Kitchen