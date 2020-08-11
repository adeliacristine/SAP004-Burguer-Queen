import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { firebaseConfig } from '../../../plugins/firebaseConfig';
import 'firebase/firestore';
import './pedidos.css';

const Orders = () => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    firebaseConfig
      .firestore()
      .collection('orders')
      .get()
      .then(function (querySnapshot) {
        setOrder(
          querySnapshot.docs
            .map((i) => ({ ...i.data(), idDoc: i.id }))
            .filter((order) => {
              return order.status === 'Pedido Entregue';
            })
        );
      });
  }, []);

  return (
    <>
      <h2 className='nextRequest'>Próximo pedido à ser preparado</h2>
      <ul>
        <Card className='requests'>
          {order.map((i, index) => {
            return (
              <li key={index} className='li'>
                <Card.Header className='title'>
                  Situação do pedido: {i.status}{" "}
                </Card.Header>
                <Card.Body>
                  <Card.Title className='customer'>
                    Cliente: {i.name} , {""} Mesa: {i.table}{" "}
                  </Card.Title>
                </Card.Body>
                <ul>
                  {i.order.map((e, index) => {
                    return (
                      <li key={index}>
                        <Card.Body>
                          <Card.Text>
                            <p>Produto: {e.name}</p>{" "}
                            <p>Quantidade: {e.count}</p>
                          </Card.Text>
                        </Card.Body>
                      </li>
                    );
                  })}
                  ;<Card.Footer className='time'>Tempo</Card.Footer>
                </ul>
              </li>
            );
          })}
          ;
        </Card>
      </ul>
    </>
  );
};

export default Orders;
