import React from 'react';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import BtnP from '../components/button/button'

const Kitchen = () => {


  return (
    <>
    <Header />
    <div className=' pedidos'>
      <h2>Próximo pedido à ser preparado</h2>
      <div className='bg-ligth d-flex '>
        <BtnP>Pedido pronto</BtnP>
      </div>

      <h2>Pedidos Prontos</h2>
      <div className='bg-ligth d-flex '>

      </div>


    </div>
    <Footer />
    </>
  )
}

export default Kitchen