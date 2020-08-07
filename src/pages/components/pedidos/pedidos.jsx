import React, { useState, useEffect } from 'react'
import { firebaseConfig } from '../../../plugins/firebaseConfig'
import 'firebase/firestore'

import BtnP from '../button/button'
import './pedidos.css'

const Pedidos = () => {

  const [order, setOrder] = useState([])

  useEffect(() => {
    firebaseConfig.firestore().collection('orders').get()
      .then((function(querySnapshot){
        setOrder(querySnapshot.docs.map((i) => ({...i.data()})))
  }))
}, []);

  return (
    <div className=' pedidos'>
      <h2>Próximo pedido à ser preparado</h2>
      <ul>
        {order.map((i, index) => {
          return(
            <li key={index}>
              <p>{i.status}</p>
              <p>{i.name}</p>
              <p>{i.table}</p>
              <ul>
                {i.order.map((e, index) => {
                  return(
                    <li key={index}>
                      <p>{e.name}</p>
                      <p>{e.count}</p>
                      <p>{e.price}</p>
                      </li>
                  )
                })}
              </ul>
              </li>
          )
        })}
      </ul>
      <div className='bg-ligth d-flex '>
      </div>

      <h2>Pedidos Prontos</h2>
      <div className='bg-ligth d-flex '>

      </div>


    </div>
  )
}
export default Pedidos