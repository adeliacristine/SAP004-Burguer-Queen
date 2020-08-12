import React, { useState } from 'react';
import BtnP from '../button/button';
import { Form } from 'react-bootstrap';
import { firebaseConfig } from '../../../plugins/firebaseConfig';
import 'firebase/firestore';
import '../input/input.css';
import '../label/label.css';
import './resumo.css';
import '../../../App.css';

const Resumo = ({ order, clearItens, total }) => {
  const [name, setName] = useState('');
  const [table, setTable] = useState('');
  const [info, setInfo] = useState('');

  const sendOrder = (event) => {
    event.preventDefault();
    if (!name || !table) {
      setInfo('Preencha todos os campos.');
    } else {
      const clientOrder = firebaseConfig.firestore().collection('orders');
      clientOrder.doc().set({
        name,
        table,
        order,
        status: 'Em Andamento',
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        endTime: null,
        tempoDePreparo: null,
      });

      setName("");
      setTable("");
      clearItens();
      setInfo('Pedido enviado para a cozinha.');
    }
  };

  return (
    <>
      <Form className='form'>
        <Form.Group>
          <Form.Label className='label'>Nome</Form.Label>
          <Form.Control className='input' type='text' value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className='label'>Mesa</Form.Label>
          <Form.Control className='input' type='number' value={table}
            onChange={(e) => setTable(e.target.value)}
          />
        </Form.Group>
        <BtnP variant='warning btnLogCad' type='submit' onClick={sendOrder}>
          Confirmar R${total},00
        </BtnP>
      </Form>
      <div className='msgError'>
        <p>{info}</p>
      </div>
    </>
  );
};

export default Resumo;
