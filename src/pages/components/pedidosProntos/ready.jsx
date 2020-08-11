import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import BtnP from '../button/button'
import '../../kitchen/kitchen.css'
import { firebaseConfig } from '../../../plugins/firebaseConfig'
import 'firebase/firestore'
import {IoIosCalendar} from 'react-icons/io'
import {RiTimerLine, RiTimerFlashLine} from 'react-icons/ri'

const Ready = () => {
  const [order, setOrder] = useState([])
  useEffect(() => {
    firebaseConfig.firestore().collection('orders').orderBy('time', 'asc').get()
      .then((function (querySnapshot) {
        setOrder(querySnapshot.docs.map((i) => ({ ...i.data(), idDoc: i.id })).filter(pedido => {
          return (
            pedido.status === "Pedido Pronto"
          )
        }))

      }))
  }, []);

	
  console.log(order)
  const Delivery = (idStatus) => {
    firebaseConfig.firestore().collection('orders').doc(idStatus).update({
      status: 'Pedido Entregue ',
    })
      .then(docRef => {
        setOrder(order.filter(pedido => { return (pedido.idDoc !== idStatus) }))
      }
      )
      .catch(error => {
        console.log('deu erro:', error)
      })
  }

  return (
    <>
      <h2 className='nextRequest'>Pedidos prontos para serem entregues.</h2>
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
                          <Card.Text >
                            <p className='cardP'>{e.name}, {e.count}</p>
                          </Card.Text>
                        </Card.Body>
                      </li>
                    )
                  })}
                  <BtnP className="btnWarn" onClick={() => Delivery(i.idDoc)}>Pedido Entregue</BtnP>
                
                  <Card.Footer className="time">
                    <div><IoIosCalendar/> {i.date}</div>
                    <div><RiTimerLine/> {i.time} {''}
                    <RiTimerFlashLine />{i.endTime}
</div> 
                     </Card.Footer>
               
                </ul>
              </li>
            )
          })}

        </Card>
      </ul>
    </>

  )
}
export default Ready