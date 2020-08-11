import React, { useState, useEffect } from 'react'
import { firebaseConfig } from '../../../plugins/firebaseConfig'
import 'firebase/firestore'
import './pedidos.css'
import {Card} from 'react-bootstrap'
import BtnP from '../button/button'

const Pedidos = () => {

  const [order, setOrder] = useState([])

  useEffect(() => {
    firebaseConfig.firestore().collection('orders').get()
      .then((function(querySnapshot){
        setOrder(querySnapshot.docs.map((i) => ({...i.data()})))
  }))
}, []);
console.log(order)

  return (
    <>
      <Card className="text-center">
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <BtnP variant="primary">Go somewhere</BtnP>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>
  
    <div className=' pedidos'>
      <h2>Próximo pedido à ser preparado</h2>
      <ul>
        {order.map((i, index) => {
          return(
            <li key={index}>
            <div>
              data: {i.date} hora: {i.time}
              <p>Estatos do pedido:{i.status}</p>
              <p>Nome do Cliente: {i.name}</p>
              <p>Mesa:{i.table}</p>
              <ul>
                {i.order.map((e, index) => {
                  return(
                    <li key={index}>
                      <div>
                      <p>Produto: {e.name}</p>   <p>Quantidade: {e.count}</p>
                      </div>
                      </li>
                  )
                })}
                  <button>Pedido pronto</button>
              </ul>
              </div>
              
          
              </li>
          )
        })}
     
      </ul>
      <div className='bg-ligth d-flex '>
      </div>
    </div>
    </>
  )
}
export default Pedidos