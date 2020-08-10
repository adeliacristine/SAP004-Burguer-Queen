import React, { useState, useEffect } from 'react';


import '../../kitchen/kitchen.css'
import { firebaseConfig } from '../../../plugins/firebaseConfig'
import 'firebase/firestore'
import { Card } from 'react-bootstrap'
import BtnP from '../button/button'



const Cooking = () => {
  const [order, setOrder] = useState([])

  useEffect(() => {
    firebaseConfig.firestore().collection('orders').get()
      .then((function(querySnapshot){
        setOrder(querySnapshot.docs.map((i) => ({...i.data(), idDoc: i.id})).filter(pedido =>{return(
          pedido.status === "Em Andamento"
        )}))
       
  }))
}, []);

console.log(order)
const Ready=(idStatus)=>{
  firebaseConfig.firestore().collection('orders').doc(idStatus).update({
    status:'Pedido Pronto'
  })
  .then(docRef => {
  setOrder(order.filter(pedido => {return(pedido.idDoc !== idStatus)})) }
  )
   .catch(error => {
     console.log('deu erro:', error)
    })
  }
  return (
    <>
        <h2 className='nextRequest'>Próximo pedido à ser preparado</h2>
        <ul>
          <Card className="pedido">
            {order.map((i, index) => {
              return (
                <li key={index} className='li'>
                  <Card.Header className='title'>Estado do pedido : {i.status} </Card.Header>
                  <Card.Body>
                    <Card.Title className='customer'>Cliente : {i.name} , {''} Mesa: {i.table} </Card.Title>
                  </Card.Body>
                  <ul>
                    {i.order.map((e, index) => {
                      return (
                        <li key={index}  >
                          <Card.Body>
                            <Card.Text>
                              <p>Produto: {e.name}</p>   <p>Quantidade: {e.count}</p>
                            </Card.Text>
                          </Card.Body>
                        </li>
                      )
                    })}
                    <BtnP variant="warning button" onClick={() => Ready(i.idDoc)}>Pedido pronto</BtnP>
                    <Card.Footer className="time">Tempo</Card.Footer>
                  </ul>
                </li>
              )
            })}
           
          </Card>
        </ul>

      
  
    </>
  )
}

export default Cooking